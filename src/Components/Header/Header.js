import React, { useState } from 'react';
import AwuraLogo from '../../Images/awuralogo2.svg';
import './Header.css';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='AwuraHeader'>
        <div className='AwuraLogoAndName'>
            <div className='AwuraLogo'>
                <img width={80} src={AwuraLogo} alt='Awura Logo' />
            </div>
            <div className='AwuraName'>AWURA</div>
        </div>
        <div className={`AwuraNavigation ${isMenuOpen ? 'open' : ''}`}>
        <div className='HamburgerIcon' onClick={toggleMenu}>
          <div className={`Bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`Bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`Bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
        <ul className='AwuraNavLinks'>
          <li>
            <a className='Links' href='/'>Home</a>
          </li>
          <li>
            <a className='Links' href='/services'>Services</a>
          </li>
          <li>
            <a className='Links' href='/projects'>Projects</a>
          </li>
          <li>
            <a className='Links' href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
