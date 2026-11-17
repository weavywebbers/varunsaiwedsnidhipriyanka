'use client';

import React from 'react';

export default function Haldi() {
  return (
    <section className="section-haldi" id="haldi" data-section="haldi" aria-label="Haldi Ceremony">
      {/* 1. Haldi Full Background Tapestry */}
      <div className="haldi-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/img/d4841bd70f9e1e15.webp"
          alt="Haldi Ceremony Background"
          className="haldi-bg-img"
          loading="lazy"
        />
      </div>

      {/* 2. Continuously Falling Marigold Petals in Background */}
      <div className="haldi-petals-container" aria-hidden="true">
        <span className="petal p1" />
        <span className="petal p2" />
        <span className="petal p3" />
        <span className="petal p4" />
        <span className="petal p5" />
        <span className="petal p6" />
        <span className="petal p7" />
        <span className="petal p8" />
        <span className="petal p9" />
        <span className="petal p10" />
        <span className="petal p11" />
        <span className="petal p12" />
        <span className="petal p13" />
        <span className="petal p14" />
        <span className="petal p15" />
        <span className="petal p16" />
      </div>

      {/* 3. Hanging Marigold Flowers Garland (Swinging at top right) */}
      <div className="hanging-flowers" aria-hidden="true">
        <img
          src="/assets/img/6f5df08d242aad52.webp"
          alt=""
          className="flowers-img"
          loading="lazy"
        />
      </div>

      {/* 4. Haldi Content (Gold typography placed over maroon velvet canvas with scroll write-in animation) */}
      <div className="haldi-content">
        <p className="haldi-eyebrow ink-write">AUSPICIOUS TURMERIC CELEBRATION</p>
        <h2 className="haldi-title ink-write">HALDI CEREMONY</h2>

        <div className="haldi-date-block ink-write">
          <p className="haldi-day-text">Wednesday,</p>
          <div className="haldi-date-badge">
            <span className="haldi-date-num">25</span>
            <span className="haldi-date-th">th</span>
          </div>
          <p className="haldi-month-year">November 2026</p>
          <p className="haldi-time">11:00 AM Onwards</p>
        </div>

        <div className="haldi-venue-block ink-write">
          <p className="haldi-venue-name">Mango Farmstay Resort</p>
          <p className="haldi-venue-loc">Inavolu, Warangal</p>
        </div>
      </div>
    </section>
  );
}
