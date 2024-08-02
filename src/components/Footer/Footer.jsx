import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <a href="#"><img src={assets.logo} alt="" className='logo' /></a>
                    <p>SwiftServe enhances the in-restaurant dining experience! Explore top restaurants effortlessly, track orders seamlessly, and pay securely. Personalized recommendations and quick reordering ensure every meal is a delightful journey from kitchen to table.</p>
                    <div className="footer-social-icons">
                        <a href="https://github.com/tusquake" target='_blank'><img src={assets.github_icon} alt="" /></a>
                        <a href="https://twitter.com/TUSHARS96468835" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/sethtushar111/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>SwiftServe</h2>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        {/* <a href="/#explore-menu"><li>Menu</li></a> */}
                        <Link to="/cart"><li>Cart</li></Link>
                        <Link to="/order"><li>Place Order</li></Link>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <a href="tel:+"><li>+91-9876545678</li></a>
                        <a href="mailto:sethtushar111@gmail.com"><li>contact@SwiftServe.com</li></a>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright&nbsp; &#169; 2024 @SwiftServe.com - All Right Reserved </p>
        </div >
    )
}

export default Footer
