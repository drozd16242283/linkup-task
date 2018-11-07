import React from 'react'

import './Search.scss'

const Search = () => (
  <div className="search-wrapper">
    <div className="category">
      <p>Category</p>
      &#8595;
      <div className="horizontal-line"></div>
    </div>
    <input type="text" className="text-input" />
    <div className="search-button">
      <p>Start searching</p>
    </div>
  </div>
)

export default Search