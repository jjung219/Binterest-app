import React from 'react';
import "./App.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <h4>Binterest</h4>
      <ul className="navlinks">
        <li className="navlink"><a href="/">Home</a></li>
        <li className="navlink"><a href="/list">My List</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;