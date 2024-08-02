import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'

const About = ({ setPlayState }) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={assets.about_banner} alt="" className='about-img' />
        <img src={assets.play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className="about-right">
        <h1>About Us <br /></h1>
        <h2>What we Value at SwiftServe</h2>
        <p>Exceptional Dining Experience: <span>We strive to create memorable dining experiences, offering top-notch service, ambiance, and attention to detail that exceed customer expectations.</span></p>
        <p>Hygiene Excellence: <span>We maintain stringent hygiene standards to ensure a clean and safe dining environment for our customers, prioritizing their health and well-being.</span></p>
        <p>Outstanding Waiter Service: <span>Our dedicated waitstaff is committed to providing attentive and personalized service, enhancing the overall dining experience and making every visit special.</span></p>
        <p>Chef Expertise: <span>Our skilled chefs bring culinary expertise and creativity to the table, crafting dishes that not only look enticing but also deliver exquisite flavors, satisfying the discerning palates of our customers.</span></p>
        <p>Delightful Taste: <span>We focus on delivering exceptional taste in every dish, ensuring that each bite is a flavorful delight that leaves a lasting impression on our customers.</span></p>
      </div>
    </div>
  )
}

export default About
