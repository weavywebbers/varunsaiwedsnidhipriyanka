'use client';

import React from 'react';
import HangingLanterns from './HangingLanterns';

export default function Hero() {
  return (
    <section className="section-hero" id="hero" data-section="hero">
      {/* Swaying Brass Diyas */}
      <HangingLanterns topOffset="-8px" />

      {/* Hero Background Tapestry */}
      <div className="hero-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/img/64f51b8ebc4f1bc5.webp"
          alt=""
          className="hero-bg-img"
          loading="eager"
        />
      </div>

      {/* Single Unified Center-Justified Container */}
      <div className="hero-unified-container">
        {/* 1. Ganesha Medallion */}
        <div className="hero-ganesha ink-write">
          <img
            src="/assets/img/228f8895621f2970.webp"
            alt="Lord Ganesha"
            width={60}
            height={60}
            className="ganesha-img"
          />
        </div>

        {/* 2. Invocation Sloka */}
        <p className="hero-sloka ink-write">|| శ్రీ గణేశాయ నమః ||</p>

        {/* 3. Groom Details (Center Justified) */}
        <div className="hero-person-block ink-write">
          <p className="hero-honorific">Chi.</p>
          <h2 className="hero-name">Varun Sai</h2>
          <p className="hero-degree">(M.S. Canada)</p>
        </div>

        {/* 4. Weds */}
        <p className="hero-weds ink-write">weds</p>

        {/* 5. Bride Details (Center Justified) */}
        <div className="hero-person-block ink-write">
          <p className="hero-honorific">Chi. La. Sow.</p>
          <h2 className="hero-name">Nidhi Priyanka</h2>
          <p className="hero-degree">(B.Tech)</p>
        </div>

        {/* 6. Floral Garland Divider */}
        <div className="hero-divider ink-write" aria-hidden="true">
          <img
            src="/assets/img/44cce96848761f6c.webp"
            alt=""
            width={240}
            height={55}
            className="divider-img"
          />
        </div>

        {/* 7. Venue (Center Justified) */}
        <div className="hero-venue ink-write">
          <h3 className="hero-venue-name">SV CONVENTION HALL</h3>
          <p className="hero-venue-address">Sneha Nagar, Waddepally, Hanamkonda</p>
        </div>

        {/* 8. Date (Center Justified) */}
        <div className="hero-date ink-write">
          <div className="hero-date-top">
            <span className="hero-date-day">28</span>
            <span className="hero-date-th">th</span>
          </div>
          <div className="hero-date-month">november, 2026</div>
        </div>
      </div>
    </section>
  );
}
