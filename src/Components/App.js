import React from 'react'

import HeaderSection from 'Components/Header-section'
import MostPopularProducts from 'Components/Most-popular-products'
import Testimonials from 'Components/Testimonials'
import Feedback from 'Components/Feedback'
import Footer from 'Components/layouts/Footer'

const App = () => (
  <div className="sections-wrapper">
    <HeaderSection/>
    <MostPopularProducts/>
    <Testimonials/>
    <Feedback/>
    <Footer/>
  </div>
)

export default App