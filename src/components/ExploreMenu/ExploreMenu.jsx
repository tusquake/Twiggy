import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our menu</h1>
      <p className='explore-menu-text'>"Discover a world of culinary delights in Twiggy's 'Explore Our Menu' section. From mouthwatering starters to delectable mains and irresistible desserts, our menu is a feast for the senses. Dive into a diverse range of flavors and savor every bite, crafted with passion and creativity to elevate your dining experience."</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
