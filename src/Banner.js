import React from 'react';
import './Banner.css';
import bannerImage from './assets/images/bannerCover.png';

function Banner() {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-logo" />
    </div>
  );
}

export default Banner;
