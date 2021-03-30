import React from 'react';
import chair from "../../images/Mask Group 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className='header-div'>
        <div className='nav-div'>
        <nav className='nav'>
            <p className='nav-p'>Home</p>
            <p className='nav-p'>About</p>
            <p className='nav-p'>Dental Services</p>
            <p className='nav-p pc'>Reviews</p>
            <p className='nav-p pc'>Blog</p>
            <p className='nav-p pc'>Contact Us</p>
        </nav>
        </div>
        <div className='header-main-div'>
            <div className='appointment-div'>
                <h1>Your New Smile <br/> Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,<br/> omnis doloribus illo perspiciatis reiciendis animi cum. </p>
                <button className='appointment-btn'>GET APPOINTMENT</button>
            </div>
            <div className='img-div'><img className='chair-img' src={chair} alt="" srcset=""/></div>
        </div>
       
            
        </div>
        <div className='header-footer'>
        <div className='footer'>
        <div><FontAwesomeIcon className='footer-icon' icon={faClock} /></div>
        <div className='footer-text'>
            <p>Opening Hours</p>
            <small>Lorem ipsum dolor sit amet</small>
            
        </div>

        </div>
        <div className='footer-black'>
        <div><FontAwesomeIcon className='footer-icon' icon={faMapMarkerAlt} /></div>
        <div className='footer-text'>
            <p>Visit our location</p>
            <small>Lorem ipsum dolor sit amet</small>
        </div>

        </div>
        <div className='footer'>
        <div><FontAwesomeIcon className='footer-icon' icon={faPhoneVolume} /></div>
        <div className='footer-text'>
            <p>Contract Us</p>
            <small>Lorem ipsum dolor sit amet</small>
        </div>

        </div>
            
        </div>
        </div>
    );
};

export default Header;