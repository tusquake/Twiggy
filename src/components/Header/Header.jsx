import React from 'react';
import { assets } from '../../assets/assets';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <video src={assets.video} autoPlay muted loop>
      </video>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>SwiftServe enhances the in-restaurant dining experience! Explore top restaurants effortlessly, track orders seamlessly, and pay securely. Personalized recommendations and quick reordering ensure every meal is a delightful journey from kitchen to table.</p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div >
  )
}

export default Header
