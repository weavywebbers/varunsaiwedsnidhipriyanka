'use client';

import React from 'react';

export default function Sangeet() {
  return (
    <section className="section-sangeet" id="sangeeth" data-section="sangeeth" aria-label="Sangeet Night">
      {/* Background Layer 1: Palace garden pavilion & night landscape */}
      <div className="sangeet-bg-layer bg-1" aria-hidden="true">
        <img
          src="/assets/img/a1ce2d4966a36429.webp"
          alt=""
          className="cover-img"
          loading="lazy"
        />
      </div>

      {/* Background Layer 2: Starry sky & illuminated gazebo (soft-light blend) */}
      <div className="sangeet-bg-layer bg-2" aria-hidden="true">
        <img
          src="/assets/img/187f913198ab5528.webp"
          alt=""
          className="cover-img"
          loading="lazy"
        />
      </div>

      {/* Electronic Dance Music (EDM) Focus Moving Spotlights */}
      <div className="sangeet-edm-lights" aria-hidden="true">
        <div className="edm-beam beam-gold" />
        <div className="edm-beam beam-cyan" />
        <div className="edm-beam beam-violet" />
        <div className="edm-beam beam-amber" />
      </div>

      {/* Skyshots Fireworks & Rocket Bursts */}
      <div className="sangeet-skyshots" aria-hidden="true">
        {/* Skyshot 1 (Upper Left Sky) */}
        <div className="skyshot shot-1">
          <div className="skyshot-rocket" />
          <div className="skyshot-flash" />
          <div className="skyshot-burst">
            <span className="spark spark-1" />
            <span className="spark spark-2" />
            <span className="spark spark-3" />
            <span className="spark spark-4" />
            <span className="spark spark-5" />
            <span className="spark spark-6" />
            <span className="spark spark-7" />
            <span className="spark spark-8" />
          </div>
        </div>

        {/* Skyshot 2 (Upper Right Sky) */}
        <div className="skyshot shot-2">
          <div className="skyshot-rocket" />
          <div className="skyshot-flash" />
          <div className="skyshot-burst">
            <span className="spark spark-1" />
            <span className="spark spark-2" />
            <span className="spark spark-3" />
            <span className="spark spark-4" />
            <span className="spark spark-5" />
            <span className="spark spark-6" />
            <span className="spark spark-7" />
            <span className="spark spark-8" />
          </div>
        </div>

        {/* Skyshot 3 (Center Top Sky) */}
        <div className="skyshot shot-3">
          <div className="skyshot-rocket" />
          <div className="skyshot-flash" />
          <div className="skyshot-burst">
            <span className="spark spark-1" />
            <span className="spark spark-2" />
            <span className="spark spark-3" />
            <span className="spark spark-4" />
            <span className="spark spark-5" />
            <span className="spark spark-6" />
            <span className="spark spark-7" />
            <span className="spark spark-8" />
          </div>
        </div>
      </div>

      {/* Glowing Star Sparkles in the Night Sky */}
      <div className="sangeet-sparkles" aria-hidden="true">
        <span className="sparkle s1 diamond" />
        <span className="sparkle s2" />
        <span className="sparkle s3 diamond" />
        <span className="sparkle s4" />
        <span className="sparkle s5 diamond" />
        <span className="sparkle s6" />
        <span className="sparkle s7 diamond" />
        <span className="sparkle s8" />
        <span className="sparkle s9 diamond" />
        <span className="sparkle s10" />
        <span className="sparkle s11 diamond" />
        <span className="sparkle s12" />
        <span className="sparkle s13 diamond" />
        <span className="sparkle s14" />
        <span className="sparkle s15" />
        <span className="sparkle s16 diamond" />
      </div>

      {/* Sangeet Content positioned so the resort name sits right above the pandiri */}
      <div className="sangeet-content">
        <p className="sangeet-eyebrow ink-write">AN EVENING OF MUSIC, RHYTHM &amp; DANCE</p>
        <h2 className="sangeet-title ink-write">SANGEET NIGHT</h2>

        <div className="sangeet-date-block ink-write">
          <p className="sangeet-day-text">Wednesday,</p>
          <div className="sangeet-date-badge">
            <span className="sangeet-date-num">25</span>
            <span className="sangeet-date-th">th</span>
          </div>
          <p className="sangeet-month-year">November 2026</p>
          <p className="sangeet-time">7:00 PM Onwards</p>
        </div>

        <div className="sangeet-venue-block ink-write">
          <p className="sangeet-venue-name">Mango Farmstay Resort</p>
          <p className="sangeet-venue-loc">Inavolu, Warangal</p>
        </div>
      </div>
    </section>
  );
}
