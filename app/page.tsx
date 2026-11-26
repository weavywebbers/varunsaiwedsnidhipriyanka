'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import HeaderControls from '../components/HeaderControls';
import MapsOverlay from '../components/MapsOverlay';
import Curtain from '../components/Curtain';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import WeddingInvitation from '../components/WeddingInvitation';
import InvitedBy from '../components/InvitedBy';
import VenueMap from '../components/VenueMap';
import Haldi from '../components/Haldi';
import Sangeet from '../components/Sangeet';

const AUDIO_SRCS = {
  main: '/assets/music/neeli-meghamulalo.m4a',
  haldi: '/assets/music/london-thumakda.m4a',
  sangeet: '/assets/music/vaathi-coming.m4a',
};

type TrackKey = 'main' | 'haldi' | 'sangeet';

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const mainFrameRef = useRef<HTMLElement | null>(null);
  const activeTrackRef = useRef<TrackKey>('main');
  const isPlayingRef = useRef<boolean>(false);
  isPlayingRef.current = isPlaying;
  const isUserPausedRef = useRef<boolean>(false);
  const audioUnlockedOnceRef = useRef<boolean>(false);

  // Direct Audio Element Refs (in DOM for bulletproof mobile/Safari playback)
  const mainAudioRef = useRef<HTMLAudioElement | null>(null);
  const haldiAudioRef = useRef<HTMLAudioElement | null>(null);
  const sangeetAudioRef = useRef<HTMLAudioElement | null>(null);

  // Helper to get audio element by key
  const getAudio = useCallback((key: TrackKey): HTMLAudioElement | null => {
    if (key === 'main') return mainAudioRef.current;
    if (key === 'haldi') return haldiAudioRef.current;
    if (key === 'sangeet') return sangeetAudioRef.current;
    return null;
  }, []);

  // Universal Play Function: ensures target track plays, others pause without resetting positions
  const playTrack = useCallback(
    (track: TrackKey = 'main') => {
      activeTrackRef.current = track;
      const target = getAudio(track);
      if (!target) return;

      const allTracks: TrackKey[] = ['main', 'haldi', 'sangeet'];
      allTracks.forEach((t) => {
        if (t !== track) {
          const a = getAudio(t);
          if (a) {
            a.pause();
          }
        }
      });

      target.volume = 0.75;
      const promise = target.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            isPlayingRef.current = true;
            audioUnlockedOnceRef.current = true;
          })
          .catch((err) => {
            // Autoplay blocked pending user gesture; will start on first touch/scroll
            console.log('Audio playback deferred pending user gesture:', err.message);
          });
      }
    },
    [getAudio]
  );

  // Track switching during scroll - pauses and plays seamlessly without resetting currentTime
  const switchTrack = useCallback(
    (newKey: TrackKey) => {
      if (activeTrackRef.current === newKey) return;
      const oldKey = activeTrackRef.current;
      activeTrackRef.current = newKey;

      const oldAudio = getAudio(oldKey);
      const newAudio = getAudio(newKey);

      if (oldAudio) {
        oldAudio.pause();
      }

      // If user hasn't manually paused music, resume new track from where it left off
      if (isPlayingRef.current && !isUserPausedRef.current && newAudio) {
        newAudio.volume = 0.75;
        newAudio
          .play()
          .then(() => {
            setIsPlaying(true);
            isPlayingRef.current = true;
          })
          .catch(() => {});
      }
    },
    [getAudio]
  );

  // 1. First Load Autoplay & One-Time Gesture Unlock Listener
  useEffect(() => {
    // Check ?hero query param to skip curtain for direct access if requested
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('hero')) {
        setIsUnlocked(true);
      }
    }

    // Attempt playback immediately on page load!
    playTrack('main');

    const gestureEvents = [
      'click',
      'touchstart',
      'touchend',
      'pointerdown',
      'pointerup',
      'wheel',
      'scroll',
      'keydown',
    ];

    const removeGestureListeners = () => {
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, triggerAudioUnlock);
      });
    };

    const triggerAudioUnlock = () => {
      if (audioUnlockedOnceRef.current || isUserPausedRef.current) {
        removeGestureListeners();
        return;
      }
      playTrack(activeTrackRef.current);
      // Clean up after first user gesture so it never interferes with user pause/mute controls
      removeGestureListeners();
    };

    gestureEvents.forEach((evt) => {
      window.addEventListener(evt, triggerAudioUnlock, { passive: true });
    });

    return () => {
      removeGestureListeners();
    };
  }, [playTrack]);

  // Frame Scroll Handler: detects current section and animates ink-write elements
  const handleScroll = useCallback(() => {
    const frame = mainFrameRef.current;
    if (!frame) return;

    const frameRect = frame.getBoundingClientRect();
    const centerPoint = frameRect.top + frameRect.height / 2;

    const haldiEl = document.getElementById('haldi');
    const sangeetEl = document.getElementById('sangeeth');

    let current: TrackKey = 'main';

    if (haldiEl) {
      const rect = haldiEl.getBoundingClientRect();
      if (rect.top <= centerPoint && rect.bottom >= centerPoint) {
        current = 'haldi';
      }
    }

    if (sangeetEl) {
      const rect = sangeetEl.getBoundingClientRect();
      const isAtBottom = frame.scrollTop + frame.clientHeight >= frame.scrollHeight - 60;
      if ((rect.top <= centerPoint && rect.bottom >= centerPoint) || isAtBottom) {
        current = 'sangeet';
      }
    }

    if (current !== activeTrackRef.current) {
      switchTrack(current);
    }

    // Dynamic scroll reveal: triggers "come written" text animation as sections scroll into view
    const sections = frame.querySelectorAll('section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < frameRect.bottom - 60 && rect.bottom > frameRect.top + 60;
      if (inView) {
        section.classList.add('section-in-view');
      } else {
        section.classList.remove('section-in-view');
      }
    });
  }, [switchTrack]);

  // Initial trigger for Hero layer animation on mount or unlock
  useEffect(() => {
    if (isUnlocked) {
      const timer = setTimeout(() => {
        handleScroll();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked, handleScroll]);

  // Handle Curtain Unlock: starts music immediately, reveals hero, and unlocks scroll after fade
  const handleUnlock = () => {
    // 1. Play main track immediately if user hasn't explicitly paused
    if (!isUserPausedRef.current) {
      playTrack('main');
    }

    // 2. Trigger hero text reveal
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.classList.add('section-in-view');
    }

    // 3. Complete unlock after slow fade finishes (1.2s)
    setTimeout(() => {
      setIsUnlocked(true);
    }, 1200);
  };

  // Toggle Music (Pause / Play without resetting)
  const handleToggleMusic = () => {
    const currentAudio = getAudio(activeTrackRef.current);
    if (!currentAudio) return;

    if (isPlayingRef.current) {
      // Pause active audio without resetting currentTime
      currentAudio.pause();
      isUserPausedRef.current = true;
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      // Resume active audio from where it was paused
      isUserPausedRef.current = false;
      currentAudio.volume = 0.75;
      currentAudio
        .play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
          audioUnlockedOnceRef.current = true;
        })
        .catch(() => {
          setIsPlaying(false);
          isPlayingRef.current = false;
        });
    }
  };

  // Toggle Maps Overlay: opens anywhere without scrolling
  const handleToggleMap = () => {
    setIsMapOpen((prev) => !prev);
  };

  return (
    <>
      {/* Preloaded DOM Audio Elements with autoPlay & playsInline for bulletproof playback */}
      <audio
        ref={mainAudioRef}
        src={AUDIO_SRCS.main}
        loop
        preload="auto"
        autoPlay
        playsInline
      />
      <audio
        ref={haldiAudioRef}
        src={AUDIO_SRCS.haldi}
        loop
        preload="auto"
        playsInline
      />
      <audio
        ref={sangeetAudioRef}
        src={AUDIO_SRCS.sangeet}
        loop
        preload="auto"
        playsInline
      />

      {/* Sticky Header Controls (Fixed Top-Right) */}
      <HeaderControls
        isMapOpen={isMapOpen}
        onToggleMap={handleToggleMap}
        isPlaying={isPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* Global Venue Maps Modal (Opens anywhere without scrolling) */}
      <MapsOverlay isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />

      {/* Main Container - LOCKED while curtain is present, scrollable when unlocked */}
      <main
        id="main-frame"
        className={!isUnlocked ? 'is-locked' : ''}
        ref={mainFrameRef}
        onScroll={handleScroll}
      >
        {/* 1. Curtain Screen (Locked until clicked or scrolled) */}
        {!isUnlocked && (
          <Curtain isUnlocked={isUnlocked} onUnlock={handleUnlock} />
        )}

        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Live Countdown Section */}
        <Countdown />

        {/* 4. Wedding Invitation Section (plays neeli-meghamulalo) */}
        <WeddingInvitation onOpenMap={() => setIsMapOpen(true)} />

        {/* 5. Invited By & Family Hosts Section (plays neeli-meghamulalo) */}
        <InvitedBy onOpenMap={() => setIsMapOpen(true)} />

        {/* 6. Venue Map View Section (SV Convention Hall) */}
        <VenueMap />

        {/* 7. Haldi Ceremony Section (plays london-thumakda) */}
        <Haldi />

        {/* 8. Sangeet Night Section (plays vaathi-coming) */}
        <Sangeet />
      </main>
    </>
  );
}
