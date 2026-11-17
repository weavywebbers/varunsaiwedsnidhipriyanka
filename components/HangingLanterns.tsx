'use client';

import React from 'react';

interface HangingLanternsProps {
  topOffset?: string;
}

export default function HangingLanterns({ topOffset = '-8px' }: HangingLanternsProps) {
  return (
    <div className="hanging-lanterns-wrapper" aria-hidden="true">
      {/* Left Hanging Diya */}
      <div
        className="hanging-diya left-diya"
        style={{ top: topOffset }}
      >
        <img
          src="/assets/img/c0648a18c81799ab.webp"
          alt=""
          width={69}
          height={189}
          loading="eager"
          className="diya-img"
        />
      </div>

      {/* Right Hanging Diya */}
      <div
        className="hanging-diya right-diya"
        style={{ top: topOffset }}
      >
        <img
          src="/assets/img/c0648a18c81799ab.webp"
          alt=""
          width={69}
          height={189}
          loading="eager"
          className="diya-img"
        />
      </div>
    </div>
  );
}
