import React from 'react';
import "./App.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
      <h4>Binterest</h4>
      <ul className="navlinks">
        <li className="navlink"><a href="/">Search</a></li>
        <li className="navlink"><a href="/list">My Bins</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;