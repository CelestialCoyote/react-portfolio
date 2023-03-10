import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer-logo'>Logo</a>

            {/*<ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>*/}

            <div className='permalinks'>
                <a href='#'>Home</a>
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#services'>Services</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#testimonials'>Testimonials</a>
                <a href='#contact'>Contact</a>
            </div>

            <div className='footer-socials'>
                <a href='https://facebook.com'><FaFacebookSquare /></a>
                <a href='https://instagram.com'><FaInstagram /></a>
                <a href='https://twitter.com'><FaTwitter /></a>
            </div>

            <div className='footer-copyright'>
                <small>&copy; Hitchhiker's Guide To The Universe. All Rights Reserved.</small>
            </div>
        </footer>
    );
};


export default Footer;
