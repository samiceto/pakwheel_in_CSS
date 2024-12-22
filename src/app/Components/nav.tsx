import React from 'react';
import Image from 'next/image';
import '../style.css';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <div className="nav-left">
          <Image
            src="/mobile.png"
            alt="Mobile App Icon"
            width={40}
            height={40}
            className="nav-image"
          />
          <p className="nav-text">Download App Via SMS</p>
        </div>
        <div className="nav-right">
          <Image
            src="/urdu.png"
            alt="Urdu Language"
            width={20}
            height={20}
            className="nav-image"
          />
          <p className="nav-text">
            <span className="separator">|</span> Sign Up
          </p>
          <p className="nav-text">
            <span className="separator">|</span> Sign In
          </p>
        </div>
      </div>
      <hr className="nav-divider" />
      <div className="nav-bottom">
        <div>
          <Image
            src="/logo.png"
            alt="Website Logo"
            width={120}
            height={40}
            className="nav-logo"
          />
        </div>
        <div className="nav-links">
          <div className="nav-link">Used Cars <span className="arrow">▼</span></div>
          <div className="nav-link">New Cars <span className="arrow">▼</span></div>
          <div className="nav-link">Bikes <span className="arrow">▼</span></div>
          <div className="nav-link">Auto Store <span className="arrow">▼</span></div>
          <div className="nav-link">Video</div>
          <div className="nav-link">Forums</div>
          <div className="nav-link">Blog</div>
          <div className="nav-link more">
            More<span className="arrow">▼</span>
            <div className="new-badge">New</div>
          </div>
        </div>
        <div>
          <button className="post-ad-btn">
            Post an Ad <span className="arrow">▼</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
