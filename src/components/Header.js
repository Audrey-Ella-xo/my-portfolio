import React from 'react';
import { useTheme } from './ThemeContext';
// import './Header.css';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Anita Odiaka</h1>
      <p>Full-Stack Engineer & Analyst</p>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
