import React from 'react'

import './Buttons.scss'

import listIcon from './list-icon.png'
import clickIcon from './click-icon.png'

const Buttons = () => (
  <div className="buttons-wrapper">
    <div className="button">
      <div className="btn-content">
        <img src={listIcon} className="list-icon" />
        <p>All categories</p>
      </div>
    </div>
    <div className="button">
      <div className="btn-content">
        <img src={clickIcon} className="click-icon" />
        <p>How it works?</p>
      </div>
    </div>
  </div>
)

export default Buttons