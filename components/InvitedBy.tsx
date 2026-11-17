'use client';

import React from 'react';

interface InvitedByProps {
  onOpenMap?: () => void;
}

export default function InvitedBy({ onOpenMap }: InvitedByProps) {
  return (
    <section id="invited-by" className="invited-section" aria-label="Invited By & Blessings">
      {/* 1. Deep Red Damask Tapestry Background */}
      <div className="section-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/img/4b7b14230bab4ecf.webp"
          alt="Invited By Background"
          className="section-bg-img"
          loading="lazy"
        />
      </div>

      {/* 2. Content Container Exactly Matching Reference Design */}
      <div className="invited-content">
        {/* Top Divine Icon: Sri Sita Rama Lakshmana & Hanuman */}
        <div className="invited-deity-art ink-write" aria-hidden="true">
          <img
            src="/assets/img/cdc1a7298bfc2706.webp"
            alt="Sri Sita Rama Lakshmana & Hanuman"
            className="deity-art-img"
            loading="eager"
          />
        </div>

        {/* Compliments & Title */}
        <div className="blessings-header ink-write">
          <p className="compliments-tag">WITH BEST COMPLIMENTS &amp; BLESSINGS</p>
          <h2 className="invited-heading">INVITED BY</h2>
        </div>

        {/* Nephew Quote: Sanvith Vayu */}
        <div className="nephew-card ink-write">
          <p className="telugu-invite">
            &ldquo;మా మామయ్య పెళ్ళికి అందరు తప్పకరాగలరు...&rdquo;
          </p>
          <p className="telugu-author">
            — పాక సన్విత్ వాయు
          </p>
          <p className="english-author">(Sanvith Vayu)</p>
        </div>

        {/* Groom's Family & Hosts */}
        <div className="family-hosts-card ink-write">
          <h3 className="hosts-tag">GROOM&apos;S FAMILY &amp; HOSTS</h3>
          <div className="host-entry">
            <span className="host-prefix">Smt. &amp; Sri</span>
            <span className="host-names">Sandiri Sunitha - Rajeshwar Rao</span>
          </div>
          <div className="host-entry">
            <span className="host-prefix">Smt. &amp; Sri</span>
            <span className="host-names">Paka Srija - Yashwanth</span>
          </div>
          <p className="friends-tag">Near &amp; Dear, Family &amp; Friends</p>
        </div>

        {/* Cordial Closing Message */}
        <div className="closing-message-card ink-write">
          <p className="closing-text">
            With the divine blessings of our elders and family,<br />
            we cordially invite you and your family to grace this<br />
            auspicious celebration.
          </p>
        </div>

        {/* Assistance & Contact Numbers */}
        <div className="assistance-card ink-write">
          <p className="assistance-label">FOR ASSISTANCE</p>
          <div className="assistance-numbers">
            <a href="tel:9701658293" className="assistance-phone">9701658293</a>
            <span className="phone-sep">•</span>
            <a href="tel:9704806249" className="assistance-phone">9704806249</a>
            <span className="phone-sep">•</span>
            <a href="tel:8686298971" className="assistance-phone">8686298971</a>
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
