import React from 'react';
import './Banner.css';
import bannerImage from './A_website_banner_featuring_a_clean,_elegant_design.png';

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;
