import React from 'react';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {links.map((link, index) => (
            <li key={index}><a href={link.href}>{link.text}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
