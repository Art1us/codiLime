import React from "react";
import "./Header.css";
import ThemeToggle from "../Toggle/ThemeToggle";

function Header({ toggleTheme,theme }) {
  return (
    <header className="header">
      <div className="header__logoContainer">
        <a href="/" className="header__logo">
          Future one
        </a>
      </div>
      
      <nav className="header__menu">
        <ul>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Network</a>
          </li>
          <li>
            <a href="#">Cloud</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />

      <button className="header__button">Contact Us</button>
    </header>
  );
}

export default Header;
