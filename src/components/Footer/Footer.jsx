import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Twiggy delivers hassle-free dining! Explore top restaurants effortlessly, track orders seamlessly, and pay securely. Personalized recommendations and quick reordering ensure every meal is a delightful journey from kitchen to doorstep.</p>
                    <div className="footer-social-icons">
                        <a href="https://github.com/tusquake" target='_blank'><img src={assets.github_icon} alt="" /></a>
                        <a href="https://twitter.com/TUSHARS96468835" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/sethtushar111/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <a href="tel:+"><li>+91-9876545678</li></a>
                        <a href="mailto:sethtushar111@gmail.com"><li>contact@twiggy.com</li></a>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ Twiggy.com - All Right Reserved by Tushar🚀</p>
        </div>
    )
}

export default Footer
