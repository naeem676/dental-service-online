import React from 'react';
import one from "../../images/Ellipse 1.png";
import dr from "../../images/dr.png";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='service-header'>
                <h2 className='h2'>Our Blog</h2>
                <h1>From Our Blog News</h1>
            </div>
            <div className='blog-main'>
                <div className='blog-one'>
                    <h3>Rashid kabir</h3>
                    <h4>30 Mar 2021</h4><br/>
                    <h4>Check at least a doctor in <br/> a year for your teeth </h4>
                </div>
                <div className='blog-two'>
                <div className='blog-two-img'>
                    <div><img src={one} alt="" srcset=""/></div>
                    <div>
                    <h4><strong>Dr John michel</strong></h4>
                        <p>30 Mar 2021</p>
                    </div>
                </div>
                <div>
                <h3><strong>2 Times of brush in a day can <br/> keep you healthy</strong> </h3>
                <p> it is a long established fact <br/> that by the readable content <br/> of a lot layout the point</p>
                </div>

                </div>
                <div className='blog-three'>
                <div className='blog-two-img'>
                    <div><img src={one} alt="" srcset=""/></div>
                    <div>
                        <h4><strong>Dr Caudi</strong></h4>
                        <p>30 Mar 2021</p>
                    </div>
                </div>
                <div>
                <h3><strong>The tooth cancer is takiing <br/> a challenge</strong> </h3>

                <p> it is a long established fact <br/> that by the readable content <br/> of a lot layout the point</p>
                </div>

                </div>
            </div>
            <div className='doctor'>
               <div className='service-header'>
               <h2 className='h2'>Our Doctor</h2>
               </div>
               <div className='doctor-div'>
               <div className='caudi'>
                   <img className='dr-img' src={dr} alt="" srcset=""/>
                   <h4>Dr Caudi</h4>
               </div>
               <div className='caudi'>
               <img className='dr-img' src={dr} alt="" srcset=""/>
                   <h4>Dr Caudi</h4>
               </div>
               <div className='caudi'>
               <img className='dr-img' src={dr} alt="" srcset=""/>
                   <h4>Dr Caudi</h4>
               </div>

               </div>

            </div>
            <div className='footer-input'>
               <div className='input-area'>
                    <h4>CONTRACT US</h4>
                    <h1>Always Connect With Us</h1>
                    <input className='input-text' type="text" placeholder='email address*'/> <br/>
                    <input className='input-text' type="text" placeholder='Subject*' /> <br/>
                    <input className='input-post' type="text" placeholder='Your message*'/>
                    <br/>
                    <button className='footer-submit'>Submit</button>
               </div>

            </div>
            
        </div>
    );
};

export default Footer;