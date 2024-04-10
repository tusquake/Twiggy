import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Twiggy delivers hassle-free dining! Explore top restaurants effortlessly, track orders seamlessly, and pay securely. Personalized recommendations and quick reordering ensure every meal is a delightful journey from kitchen to doorstep.</p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div >
  )
}

export default Header
