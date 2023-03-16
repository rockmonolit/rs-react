import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="headerContent">
          <nav className="navbar">
            <Link to="/main" className="linkBtn btnMain">
              Main
            </Link>
            <Link to="/about" className="linkBtn btnAbout">
              About Us
            </Link>
            <Link to="/404" className="linkBtn btnError">
              404
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
