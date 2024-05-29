// src/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
      <h1>My React App</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><a href="#home" style={{ color: 'white' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white' }}>About</a></li>
        <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
