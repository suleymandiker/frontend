import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hakkimda">Hakkımda</a></li>
        <li><a href="#reklam">Reklam</a></li>
        <li><a href="#iletisim">İletişim</a></li>
        <li><a href="#gundelik">Gündelik</a></li>
        <li><a href="#hikayeler">Hikayeler</a></li>
        <li><a href="#deneme">Deneme</a></li>
        <li><a href="#elestiri">Eleştiri</a></li>
        <li><a href="#mizah">Mizah</a></li>
        <li><a href="#yasam">Yaşam ve İnsan</a></li>
        <li><a href="#sinemaskop">Sinemaskop</a></li>
        <li><a href="#arastirma">Araştırma</a></li>
        <li><a href="#bloggess">Bloggess</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
