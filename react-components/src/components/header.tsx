import React from 'react';

class Header extends React.Component {
  render() {
    return <header className="header">
        <div className='headerContent'>
          <nav className='navbar'>
            <button className='button btnMain'>Main</button>
            <button className='button btnAbout'>About Us</button>
            <button className='button btn404'>404</button>
          </nav>
        </div>
    </header>;
  }
}

export default Header;
