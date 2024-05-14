import React, { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src= "logo.png"className="logo"/>
      <img src= "logoTwo.png" className='logoTwo' />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`lineOne ${menuOpen ? 'open' : ''}`}></div>
        <div className={`linetwo ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
