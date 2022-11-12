import React from 'react';
import Logo from '../assets/logo1.png';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div> 
        <img src={Logo} alt="Logo"  style={{width: '75px'}}/>
      </div>
      <div>
        {/* menu */}
        <ul className='flex'>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* hamburger */}
        <div className='hidden'>
          <FaBars />
        </div>

      {/* mobile-menu*/}
      <ul className='hidden'>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>

      {/* social icons */}
      <div>

      </div>

    </div>
  );
}

export default Navbar;
