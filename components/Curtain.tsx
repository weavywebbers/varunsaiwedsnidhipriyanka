'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CurtainProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export default function Curtain({ isUnlocked, onUnlock }: CurtainProps) {
  const [isFading, setIsFading] = useState(false);
  const touchStartYRef = useRef<number | null>(null);
  const openingTriggeredRef = useRef(false);

  const triggerOpen = useCallback(() => {
    if (openingTriggeredRef.current || isUnlocked) {
      // Still trigger onUnlock to ensure audio starts on any repeated interaction
      onUnlock();
      return;
    }
    openingTriggeredRef.current = true;
    setIsFading(true);
    onUnlock();
  }, [isUnlocked, onUnlock]);

  useEffect(() => {
    if (isUnlocked) return;

    // Scroll wheel trigger: scrolling down opens the curtain and plays audio
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 5) {
        triggerOpen();
        onUnlock();
      }
    };

    // Touch swipe / scroll trigger
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      onUnlock(); // Prime audio immediately on initial touch!
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return;
      const diffY = touchStartYRef.current - e.touches[0].clientY;
      if (Math.abs(diffY) > 8) {
        triggerOpen();
        onUnlock();
      }
    };

    // touchend is guaranteed user activation in mobile browsers (iOS & Android)
    const handleTouchEnd = () => {
      onUnlock();
      touchStartYRef.current = null;
    };

    const handlePointerDown = () => {
      onUnlock();
    };

    const handlePointerUp = () => {
      onUnlock();
    };

    // Keyboard navigation triggers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        triggerOpen();
        onUnlock();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isUnlocked, triggerOpen, onUnlock]);

  if (isUnlocked) return null;

  return (
    <div
      className={`curtain-locked-screen ${isFading ? 'curtain-fading-out' : ''}`}
      onClick={triggerOpen}
      role="button"
      tabIndex={0}
      aria-label="Click or scroll to open wedding invitation"
    >
      {/* Background layer 1 (curtain) */}
      <div className="curtain-bg-layer bg-1">
        <img
          src="/assets/img/cd97be7438c94c95.webp"
          alt=""
          className="cover-img"
          loading="eager"
        />
      </div>

      {/* Background layer 2 (blend paper & feet) */}
      <div className="curtain-bg-layer bg-2">
        <img
          src="/assets/img/6596e3498156e61c.webp"
          alt=""
          className="cover-img"
          loading="eager"
        />
      </div>

      {/* Invitation Card Foreground Texts */}
      <div className="curtain-card-container">
        <p className="curtain-invite-text">You&apos;re Invited</p>

        <div className="curtain-names-script">
          <span>Varun Sai</span>
          <span className="ampersand">&amp;</span>
          <span>Nidhi Priyanka</span>
        </div>

        <div className="curtain-date">
          <span className="curtain-month-str">November 28th, 2026</span>
        </div>

        {/* Original Cursive "click to Open" */}
        <p className="curtain-click-text">click to Open</p>
      </div>
    </div>
  );
}
