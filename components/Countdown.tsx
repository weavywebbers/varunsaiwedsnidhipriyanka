'use client';

import React, { useState, useEffect } from 'react';
import HangingLanterns from './HangingLanterns';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Target: November 28, 2026 11:00:00 AM IST
  const targetDate = new Date('2026-11-28T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="section-countdown" id="countdown" data-section="countdown">
      {/* Swaying Brass Diyas */}
      <HangingLanterns topOffset="-8px" />

      {/* Countdown Background */}
      <div className="countdown-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/img/7b7e8b126ded838b.webp"
          alt=""
          className="cover-img"
          loading="lazy"
        />
      </div>

      <div className="countdown-content">
        <p className="countdown-eyebrow ink-write">CELEBRATION COUNTDOWN</p>
        <h2 className="countdown-title ink-write">SHUBHA MUHURTHAM</h2>

        {/* Live Countdown Counter Grid */}
        <div className="countdown-timer-grid ink-write" role="timer" aria-live="polite">
          <div className="time-box">
            <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="time-label">DAYS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="time-label">HOURS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="time-label">MINUTES</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="time-label">SECONDS</span>
          </div>
        </div>

        {/* Date and Muhurtham details */}
        <div className="countdown-details ink-write">
          <p className="muhurtham-date">Saturday, 28th November 2026</p>
          <p className="muhurtham-time">Auspicious Sumuhurtham at 11:00 AM</p>
        </div>
      </div>
    </section>
  );
}
