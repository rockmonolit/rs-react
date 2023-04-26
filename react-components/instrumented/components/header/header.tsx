import React from 'react';
import { NavLink } from 'react-router-dom';

export type HeaderProps = {
  currentPage: string;
};

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="headerContent">
          <nav className="navbar">
            <NavLink to="/" className="linkBtn btnMain">
              Main
            </NavLink>
            <NavLink to="/about" className="linkBtn btnAbout">
              About Us
            </NavLink>
            <NavLink to="/form" className="linkBtn btnAbout">
              Form
            </NavLink>
          </nav>
          <p className="currentRoute headerText">Current page: {props.currentPage}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
