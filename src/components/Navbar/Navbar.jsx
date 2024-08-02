import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false); // New state for search bar visibility

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  const handleSearchClick = () => {
    setShowSearch(!showSearch); // Toggle search bar visibility
  };

  const handleSearchChange = (e) => {
    // Handle search input change
  };


  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Us</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">

        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowlogin(true)} className='sign-in'>sign in</button> :
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} /><p>Logout</p></li>
            </ul>
          </div>}

      </div>
    </div>
  )
}

export default Navbar;
