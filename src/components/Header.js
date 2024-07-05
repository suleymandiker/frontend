import React from 'react';
import './Header.css';
import logo from '../assets/images/bannerCover.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Çıplak Yazar Logo" className="header-logo" />
    </header>
  );
};  

export default Header;
