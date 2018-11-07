import React from 'react'

import footerIcon from './footer-icon.png'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <img src={footerIcon} />
          <ul className="footer-navigation">
            <li className="navigation-item">About us</li>
            <li className="navigation-item">terms of service</li>
            <li className="navigation-item">privacy policy</li>
            <li className="navigation-item">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="copyright-text">
        <p>&copy; {currentYear} Oleh Drozd</p>
      </div>
    </footer>
  )
}

export default Footer