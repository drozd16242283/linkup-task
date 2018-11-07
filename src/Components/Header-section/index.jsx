import React from 'react'

import './HeaderSection.scss';

import Navigation from '../layouts/Navigation'
import Title from './Title'
import Search from './Search'
import Buttons from './Buttons'

const HeaderSection = () => (
  <section className="header-section">
    <Navigation/>
    <div className="header-content">
      <div className="content-wrapper">
        <Title/>
        <Search/>
      </div>
      <Buttons/>
    </div>
  </section>
)

export default HeaderSection