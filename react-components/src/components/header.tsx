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
        <div className="wrapper">
          <div className="headerContent">
            <nav className="navbar">
              <NavLink to="/" className="linkBtn btnMain">
                Main
              </NavLink>
              <NavLink to="/about" className="linkBtn btnAbout">
                About Us
              </NavLink>
            </nav>
            <p className="currentRoute headerText">Current page: {this.props.currentPage}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
