import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="headerContent">
          <nav className="navbar">
            <NavLink to="/main" className="linkBtn btnMain">
              Main
            </NavLink>
            <NavLink to="/about" className="linkBtn btnAbout">
              About Us
            </NavLink>
            <NavLink to="/404" className="linkBtn btnError">
              404
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
