import React from 'react';
import { NavLink } from 'react-router-dom';

export type HeaderProps = {
  currentPage: string;
};

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

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
          <p className="currentRoute headerText">Current page: {this.props.currentPage}</p>
        </div>
      </header>
    );
  }
}

export default Header;
