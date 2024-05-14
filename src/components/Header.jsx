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
          <li><a href="#">we are</a></li>
          <li><a href="#">why us</a></li>
          <li><a href="#">we offer</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">contact</a></li>
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
