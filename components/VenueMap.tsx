'use client';

import React from 'react';
import HangingLanterns from './HangingLanterns';

export default function VenueMap() {
  return (
    <section id="venue-map" className="section-venue-map" aria-label="SV Convention Hall Map & Directions">
      {/* Swaying Brass Diyas */}
      <HangingLanterns topOffset="-8px" />

      {/* Deep Red Damask Tapestry Background */}
      <div className="section-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/img/4b7b14230bab4ecf.webp"
          alt=""
          className="section-bg-img"
          loading="lazy"
        />
      </div>

      {/* Venue Map Content */}
      <div className="venue-map-content">
        {/* Header */}
        <div className="venue-map-header ink-write">
          <span className="venue-map-badge">WEDDING VENUE MAP</span>
          <h2 className="venue-map-title">SV CONVENTION HALL</h2>
          <p className="venue-map-sub">Sneha Nagar, Waddepally, Hanamkonda</p>
          <p className="venue-map-date">Saturday, 28th November 2026 • 11:00 AM</p>
        </div>

        {/* Embedded Interactive Map Card */}
        <div className="venue-map-card ink-write">
          <div className="venue-map-frame-wrapper">
            <iframe
              title="SV Convention Hall Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.407223630237!2d79.5375114!3d18.0086287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fb2fa2b9b19%3A0xda5c03902032be08!2sSV%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="venue-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="venue-map-card-footer">
            <a
              href="https://www.google.com/maps/place/SV+Convention+Hall/@18.0086287,79.5400863,17z/data=!4m6!3m5!1s0x3a334fb2fa2b9b19:0xda5c03902032be08!8m2!3d18.0086287!4d79.5400863!16s%2Fg%2F11fhr1j947"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-map-nav-btn"
            >
              <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions on Google Maps →
            </a>
          </div>
        </div>

        {/* Route Assistance Helpline */}
        <div className="venue-map-assistance ink-write">
          <p className="venue-map-help-label">FOR ROUTE ASSISTANCE</p>
          <div className="venue-map-phones">
            <a href="tel:9701658293" className="venue-phone-link">9701658293</a>
            <span className="phone-sep">•</span>
            <a href="tel:9704806249" className="venue-phone-link">9704806249</a>
            <span className="phone-sep">•</span>
            <a href="tel:8686298971" className="venue-phone-link">8686298971</a>
          </div>
        </div>
      </div>

      {/* Zero˚Labs Footer Link - Bottom Right */}
      <div className="zerodegree-credits">
        <a
          href="https://zerodegreelabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="zerodegree-link"
        >
          Zero˚Labs
        </a>
      </div>
    </section>
  );
}
