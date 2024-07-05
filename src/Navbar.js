import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './Navbar.css';
import Paginition from './Paginition';
import Home from './Home';




function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/pagination">Pagination</Link></li>
      </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/pagination" element={<Paginition />} />
    </Routes>
    </div>
 
  );
}

export default Navbar;
