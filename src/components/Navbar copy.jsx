// Import necessary dependencies
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// Define your component
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <ul>
        <li style={{cursor: 'pointer'}}>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Section 1
          </Link>
        </li>
        <li style={{cursor: 'pointer'}}>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Section 2
          </Link>
        </li>
        {/* Add more sections as needed */}
        <li style={{cursor: 'pointer'}}>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Section 3
          </Link>
        </li>
        <li style={{cursor: 'pointer'}}>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Section 4
          </Link>
        </li>
      </ul>
      <div className="scroll-to-top" onClick={scrollToTop}>
        Scroll to Top
      </div>
    </nav>
  );
};

export default Navbar;
