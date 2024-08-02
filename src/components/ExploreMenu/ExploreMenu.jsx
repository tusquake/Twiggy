import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our menu</h1>
      <p className='explore-menu-text'>Discover a world of culinary delights in SwiftServe's 'Explore Our Menu' section. Immerse yourself in a gastronomic journey filled with a tantalizing array of dishes crafted to perfection. Start your culinary adventure with mouthwatering starters that awaken your taste buds. From delectable mains showcasing a fusion of flavors to irresistible desserts that leave a lasting impression, every dish is a masterpiece.

        Indulge in a symphony of tastes, textures, and aromas meticulously curated to delight your senses. Our menu is a celebration of culinary artistry, offering a diverse range of options to cater to every palate. Whether you crave traditional classics or innovative creations, each dish is infused with passion and creativity.
      </p>
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
