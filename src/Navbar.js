import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Gündelik</Link></li>
        <li><Link to="/">Hikayeler</Link></li>
        <li><Link to="/">Deneme</Link></li>
        <li><Link to="/">Eleştiri</Link></li>
        <li><Link to="/">Mizah</Link></li>
        <li><Link to="/">Yaşam Ve İnsan</Link></li>
        <li><Link to="/">Sinemaskop</Link></li>
        <li><Link to="/">Araştırma</Link></li>
        <li><Link to="/">Bloggess</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
