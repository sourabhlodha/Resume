import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => { 
  return (
  <header>
    
    <nav className="navbar navbar-toggleable-md navbar-primary justify-content-between">  
        <div className="navbar-main">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="selected">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link" activeClassName="selected">About</NavLink>
            </li>
             <li className="nav-item">
              <NavLink exact to="/Skills" className="nav-link" activeClassName="selected">Skills</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;
