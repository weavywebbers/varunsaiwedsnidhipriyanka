'use client';

import React from 'react';
import HangingLanterns from './HangingLanterns';

interface WeddingInvitationProps {
  onOpenMap?: () => void;
}

export default function WeddingInvitation({ onOpenMap }: WeddingInvitationProps) {
  return (
    <section id="wedding" className="wedding-section" aria-label="Wedding Invitation">
      {/* Background layer */}
      <div className="section-bg-wrapper">
        <img
          src="/assets/img/a3f699c99e1c9522.webp"
          alt="Wedding Invitation Background"
          className="section-bg-img"
        />
        {/* Elephant Decorative Blend Overlay (multiply blend) */}
        <img
          src="/assets/img/8f6a6409019404d3.webp"
          alt="Elephant Background"
          className="section-bg-blend elephant-bg"
        />
      </div>

      {/* Hanging Brass Lanterns */}
      <HangingLanterns />

      {/* Section Content */}
      <div className="wedding-content">
        {/* Vedic Sacred Shloka */}
        <div className="sacred-shloka-group ink-write">
          <p className="sacred-shloka-header">
            || SRI RASTHU • SUBHAMASTHU • AVIGHNAMASTHU ||
          </p>
          <p className="sacred-shloka-sub">
            ॥ MANGALYA TANTUNANENA MAMA JEEVANA HETUNA ॥
          </p>
        </div>

        {/* Section Title */}
        <div className="wedding-title-wrapper ink-write">
          <span className="ornament-leaf">❦</span>
          <h2 className="wedding-title">WEDDING INVITATION</h2>
          <span className="ornament-leaf">❦</span>
        </div>

        {/* Couple & Parents Lineage Card */}
        <div className="lineage-container ink-write">
          {/* Groom Block */}
          <div className="person-block groom-block">
            <span className="honorific">Chi.</span>
            <h3 className="person-name">Varun Sai <span className="degree">(M.S. Canada)</span></h3>
            <p className="relation-text">Younger son of</p>
            <p className="parent-names">
              <span className="parent-prefix">Smt. &amp; Sri</span>
              <span className="parent-actual-names">Sandiri Sunitha - Rajeshwar Rao (Ravi) <span className="designation">RLY</span></span>
            </p>
          </div>

          {/* Sacred Knot Divider */}
          <div className="weds-divider">
            <span className="knot-line"></span>
            <span className="weds-script">weds</span>
            <span className="knot-line"></span>
          </div>

          {/* Bride Block */}
          <div className="person-block bride-block">
            <span className="honorific">Chi. La. Sow.</span>
            <h3 className="person-name">Nidhi Priyanka <span className="degree">(B.Tech)</span></h3>
            <p className="relation-text">Elder daughter of</p>
            <p className="parent-names">
              <span className="parent-prefix">Smt. &amp; Sri</span>
              <span className="parent-actual-names">Neelam Sridevi - Ramesh Babu</span>
            </p>
          </div>
        </div>

        {/* Auspicious Muhurtham Box */}
        <div className="muhurtham-card ink-write">
          <div className="muhurtham-badge">SHUBHA MUHURTHAM</div>
          <div className="muhurtham-time">11:00 AM</div>
          <div className="muhurtham-date">Saturday, 28th November, 2026</div>
          <div className="muhurtham-lagnam">
            Punarvasu Nakshatram: &ldquo;Makara Lagnam&rdquo;
          </div>
        </div>

        {/* Venue Information with Quick Map Link */}
        <div className="wedding-venue-card ink-write">
          <div className="venue-title-sub">VENUE</div>
          <h4 className="wedding-venue-name">SV Convention Hall</h4>
          <p className="wedding-venue-addr">
            Sneha Nagar, Waddepally, Hanamkonda
          </p>
          {onOpenMap && (
            <button
              type="button"
              className="venue-map-trigger-btn"
              onClick={onOpenMap}
            >
              <svg className="pin-tiny" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              View Venue &amp; Directions
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
