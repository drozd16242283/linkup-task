import React from 'react'

import './MostPopularProducts.scss'

import hubstaffIcon from './products-icons/hubstaff-directory.png'
import jiraIcon from './products-icons/jira.png'
import slackIcon from './products-icons/slack.png'
import traveIcon from './products-icons/trave-chat.png'
import networkIcon from './products-icons/network.png'
import timecampIcon from './products-icons/time-camp.png'

const MostPopularProducts = () => (
  <section className="most-popular-products">
    <div className="products-title">
      <h1 className="title-text">Most Popular Products</h1>
      <p className="description">This is the list of products that are most interested in users</p>
    </div>
    <div className="products-list">
      <div className="product-item">
        <img src={hubstaffIcon} className="product-icon" />
        <span className="product-name">Hubstaff Directory</span>
      </div>
      <div className="product-item">
        <img src={jiraIcon} className="product-icon" />
        <span className="product-name">Jira 2017</span>
      </div>
      <div className="product-item">
        <img src={slackIcon} className="product-icon" />
        <span className="product-name">Slack Pro</span>
      </div>
      <div className="product-item">
        <img src={traveIcon} className="product-icon" />
        <span className="product-name">TraveChat</span>
      </div>
      <div className="product-item">
        <img src={networkIcon} className="product-icon" />
        <span className="product-name">Network</span>
      </div>
      <div className="product-item">
        <img src={timecampIcon} className="product-icon" />
        <span className="product-name">Time Camp</span>
      </div>
    </div>
    <div className="all-products">
      <a href="#">All products</a>
    </div>
  </section>
)

export default MostPopularProducts