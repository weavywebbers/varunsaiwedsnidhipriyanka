'use client';

import React, { useEffect } from 'react';

interface MapsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapsOverlay({ isOpen, onClose }: MapsOverlayProps) {
  // Prevent background scroll while overlay is open, and close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="maps-overlay-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Event Venues & Maps"
    >
      <div
        className="maps-overlay-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="maps-header">
          <div className="maps-header-left">
            <span className="maps-badge">CELEBRATION VENUES</span>
            <h2 className="maps-title">Location &amp; Directions</h2>
          </div>
          <button
            type="button"
            className="maps-close-btn"
            onClick={onClose}
            aria-label="Close Maps"
          >
            ✕
          </button>
        </div>

        {/* Venues Scrollable Container: Chronological Order (Haldi & Sangeet first, then Marriage) */}
        <div className="maps-body">
          {/* 1. Haldi & Sangeet Venue (First - Nov 25th) */}
          <div className="venue-card">
            <div className="venue-card-header">
              <span className="venue-type celebration-tag">HALDI &amp; SANGEET</span>
              <span className="venue-date">25th Nov 2026 • 11 AM &amp; 7 PM</span>
            </div>
            <h3 className="venue-name">Mango Farmstay Resort</h3>
            <p className="venue-address">
              Inavolu, Warangal District, Telangana 506313
            </p>
            <div className="venue-actions">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mango+Farmstay+Resort+Inavolu+Warangal"
                target="_blank"
                rel="noopener noreferrer"
                className="map-action-btn primary single-action"
              >
                <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Get Directions →
              </a>
            </div>
          </div>

          {/* 2. Marriage Ceremony (Second - Nov 28th - No Reception) */}
          <div className="venue-card">
            <div className="venue-card-header">
              <span className="venue-type wedding-tag">MARRIAGE CEREMONY</span>
              <span className="venue-date">28th Nov 2026 • 11:00 AM</span>
            </div>
            <h3 className="venue-name">SV Convention Hall</h3>
            <p className="venue-address">
              Sneha Nagar, Waddepally, Hanamkonda, Warangal, Telangana 506370
            </p>
            <div className="venue-actions">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=SV+Convention+Hall+Sneha+Nagar+Waddepally+Hanamkonda"
                target="_blank"
                rel="noopener noreferrer"
                className="map-action-btn primary single-action"
              >
                <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Footer info note with direct dial assistance links */}
        <div className="maps-footer">
          <p className="maps-note">
            For assistance with directions or routes:
          </p>
          <div className="maps-assistance-numbers">
            <a href="tel:9701658293" className="maps-phone-link">9701658293</a>
            <span className="maps-sep">•</span>
            <a href="tel:9704806249" className="maps-phone-link">9704806249</a>
            <span className="maps-sep">•</span>
            <a href="tel:8686298971" className="maps-phone-link">8686298971</a>
          </div>
        </div>
      </div>
    </div>
  );
}
