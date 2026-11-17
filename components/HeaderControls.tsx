'use client';

import React from 'react';

interface HeaderControlsProps {
  isMapOpen: boolean;
  onToggleMap: () => void;
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export default function HeaderControls({
  isMapOpen,
  onToggleMap,
  isPlaying,
  onToggleMusic,
}: HeaderControlsProps) {
  return (
    <div className="header-controls" role="toolbar" aria-label="Quick Actions">
      {/* 1. Location Pin / Close Button */}
      <button
        type="button"
        className={`control-btn map-btn ${isMapOpen ? 'is-active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleMap();
        }}
        aria-label={isMapOpen ? 'Close Map Overlay' : 'Open Venue Maps'}
        title={isMapOpen ? 'Close Maps' : 'View Venue Locations'}
      >
        <span className="btn-icon-wrapper">
          {isMapOpen ? (
            /* Close "X" Icon */
            <svg
              className="icon-svg icon-close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Map Pin Icon */
            <svg
              className="icon-svg icon-pin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
            </svg>
          )}
        </span>
      </button>

      {/* 2. Music Toggle Button */}
      <button
        type="button"
        className={`control-btn music-btn ${isPlaying ? 'is-playing' : 'is-muted'}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleMusic();
        }}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        <span className="btn-icon-wrapper">
          {isPlaying ? (
            /* Active Music Wave / Equalizer Icon */
            <svg
              className="icon-svg icon-music"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" fill="#ffffff" />
              <circle cx="18" cy="16" r="3" fill="#ffffff" />
            </svg>
          ) : (
            /* Muted Music Icon */
            <svg
              className="icon-svg icon-music-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="2" y1="2" x2="22" y2="22" stroke="#ff6b6b" strokeWidth="2.5" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
