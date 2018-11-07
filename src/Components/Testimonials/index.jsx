import React from 'react'
import Slider from 'react-slick'

import './Testimonials.scss'

import sliderPhoto1 from './slider-icons/slider-photo-1.png'
import sliderPhoto2 from './slider-icons/slider-photo-2.png'
import sliderPhoto3 from './slider-icons/slider-photo-3.png'


const Testimonials = () => {
  const sliderSettings = {
    fade: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    adaptiveHeight: true
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <h1 className="title-text">Testimonials</h1>
        <p className="description">What our customers told about us</p>
      </div>
      <div className="testimonials-slider">
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <div className="icon-wrapper">
              <img src={sliderPhoto1} className="author-icon"/>
            </div>
            <p className="description">Loved working with LinkUp. Great guys, developers, and management.
              They knew how to do the job, in the most professional way.</p>
            <div className="author">
              <span className="author-name">Adam Frank</span>
              <span className="author-position">CTO ScaleAbout</span>
            </div>
          </div>
          <div className="slider-item">
            <div className="icon-wrapper">
              <img src={sliderPhoto2} className="author-icon"/>
            </div>
            <p className="description">I have been incredibly impressed with LinkUp team of developers.
              They worked hard to deliver the highest-quality product possible and exceeded my expectations at every
              step of the way. I initially found Andriy in search of a better price than what I could find locally with
              other development firms. But what I found - in addition to a better price - was a much higher-quality
              product
              as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.</p>
            <div className="author">
              <span className="author-name">John Kamman</span>
              <span className="author-position">Wholesum Founder</span>
            </div>
          </div>
          <div className="slider-item">
            <div className="icon-wrapper">
              <img src={sliderPhoto3} className="author-icon"/>
            </div>
            <p className="description">Nice company willing to work and get educated at he same time.
              Ready to face any challenges and very friendly with customers. They quote very humbly and every
              invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating
              on development and maintenance. Highly recommended.</p>
            <div className="author">
              <span className="author-name">Oleh Zavadsky</span>
              <span className="author-position">CEO Ljus Sp. z o.o.</span>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials