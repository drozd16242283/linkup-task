import React from 'react'

import headerIcon from './header-logo.png'
import './Navigation.scss'

const Navigation = () => (
  <header>
    <nav className="navigation">
      <div className="navigation-logo">
        <a href="/">
          <img src={headerIcon} alt="Navigation Logo" />
        </a>
      </div>
      <div className="navigation-list-wrapper">
        <ul className="nav-list">
          <li className="nav-item">All products</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Log In</li>
          <div className="horizontal-line"></div>
          <li className="nav-item">Sign Up</li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navigation