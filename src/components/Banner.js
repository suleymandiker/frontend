import React from 'react';
import './Banner.css';
import bannerCover from '../assets/images/bannerCover.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerCover} alt="Banner Cover" />
    </div>
  );
};

export default Banner;
