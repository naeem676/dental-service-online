import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import chair from "../../images/Mask Group 1.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css';

library.add(fab);

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    const month = value.toLocaleDateString('default', { month: 'long' });
    const date = value.getDate();
    const year = value.getFullYear();
    
    return (
        <div className='appointment-components'>
            <div className='appointment-header'>
                    <div className='nav-div'>
                <nav className='nav'>
                    <p className='nav-p'>Home</p>
                    <p className='nav-p'>About</p>
                    <p className='nav-p'>Dental Services</p>
                    <p className='nav-p '>Reviews</p>
                    <p className='nav-p '>Blog</p>
                    <p className='nav-p '>Contact Us</p>
                </nav>
                </div>
                <div className='header-main-div'>
                    <div className='appointment-celender'>
                    <Calendar
                            onChange={onChange}
                            value={value}
                        />
                        
                    </div>
                    <div className='img-div'><img className='chair-img' src={chair} alt="" srcset=""/></div>
                </div>

            </div>
            <div className='appointment-main'>
            <div className='service-header'> 
                  <h1 className='h2'>Available Appointment on {month} {date}, {year}</h1>

            </div>
            <div className='main-one'>
            <div className='shedule'>
                <h3 className='h2'>Teeth Cleaning</h3>
                <p>5:00 pm - 6.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
               <h3 className='h2'>Cosmetic Dentistry</h3>
                <p>10:00 pm - 11.30 am</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
              <h3 className='h2'>Teeth Orthodontics</h3>
                <p>8:00 pm - 9.30 am</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            </div>
            <div className='main-one'>
            <div className='shedule'>
               <h3 className='h2'>Cavity Protection</h3>
                <p>7:00 pm - 8.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
            <h3 className='h2'>Cosmetic Dentistry</h3>
                <p>8:00 pm - 9.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
            <h3 className='h2'>Teeth Cleaning</h3>
                <p>9:00 pm - 10.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            </div>

            </div>
            <div className='end-footer'>
            <div className='emergency'>
               <p>Emergency Dental Care</p>
                <p>Check up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check up</p>
            </div>
            <div>
                <p className='h2'><strong>Services</strong></p>
                <p>Emergency Dental Care</p>
                <p>Check up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check up</p>
            </div>
            <div>
                <p className='h2'><strong>Oral Health</strong></p>
                <p>Emergency Dental Care</p>
                <p>Check up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check up</p>
            </div>
            <div>
                <p className='h2'><strong>Our Address</strong></p><br/>
                <p>Chittagong, chandgaon</p><br/>
                <div className='icon-div'>
                <FontAwesomeIcon className='brand-icon' icon={["fab", "facebook"]} />
                <FontAwesomeIcon className='brand-icon' icon={["fab", "google-plus"]} />
                <FontAwesomeIcon className='brand-icon' icon={["fab", "twitter"]} />
                </div><br/>
                <p>Call Now</p>
                <button className='footer-submit'>+333888555</button>
            </div>
            

            </div>
            <div className='copy'>
                <small>©Copyright 2021 All right Reserved</small>
            </div>
        </div>
    );
};

export default Appointment;