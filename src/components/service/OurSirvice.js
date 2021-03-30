import React from 'react';
import Fluoride from "../../images/001-dental.png";
import Cavity from "../../images/tooth (1).png";
import Teath from "../../images/tooth.png";
import Treatment from "../../images/Mask Group 3.png";
import doctor from "../../images/5790-removebg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import one from "../../images/Ellipse 1.png";
import two from "../../images/Ellipse 2.png";
import three from "../../images/Ellipse 3.png";
import './OurService.css'

const OurSirvice = () => {
    return (
        <div className='OurService'>
            <div className='service-header'>
                <h2 className='h2'>Our Service</h2>
                <h1>Services We provide</h1>
            </div>
            <div className='service-main'>
                <div>
                    <img src={Fluoride} alt="" srcset=""/>
                    <h4>Fluoride Treatment</h4>
                    <h4 className='service-main-h4'>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Repellendus nobis maiores perspiciatis. <br/> Ad, placeat! Non, harum praesentium. </h4>
                </div>
                <div>
                <img src={Cavity} alt="" srcset=""/>
                    <h4>Cavity Filing</h4>
                    <h4 className='service-main-h4'>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Repellendus nobis maiores perspiciatis. <br/> Ad, placeat! Non, harum praesentium. </h4>
                </div>
                <div>
                <img src={Teath} alt="" srcset=""/>
                    <h4>Teath Whitening</h4>
                    <h4 className='service-main-h4'>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Repellendus nobis maiores perspiciatis. <br/> Ad, placeat! Non, harum praesentium. </h4>
                </div>
            </div>
            <div className='service-treatment'>
                <div className='img-div'><img className='treatment-img' src={Treatment} alt="" srcset=""/></div>
                <div>
                    <h1>Exceptional Dental <br/> Care, On Your terms</h1>
                    <h4 className='service-main-h4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Nihil neque ex eaque optio, quia omnis autem fugiat blanditiis <br/> excepturi sunt quasi esse amet delectus ipsam id nemo. Similique, blanditiis nemo? <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Veniam eveniet consequatur, possimus atque molestiae distinct <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error, aperiam, <br/> ea nostrum optio facilis sunt quis unde magnam deserunt minima qui accusamus <br/> dolorem molestiae recusandae eos, corporis labore consectetur. <br/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, <br/> dolores dolore! Debitis voluptate commodi explicabo, <br/> obcaecati fuga earum ab. Ab voluptatem veritatis nesciunt <br/> temporibus nam ratione repellat <br/> ipsa? Voluptates, veritatis!</h4>
                    <button className='learn-btn'>Learn More</button>
                </div>
            </div>
            <div className='service-doctor'>
                <div className='doctor-img-div'>
                    <img className='doctor-img' src={doctor} alt="" srcset=""/>
                </div>
                <div>
                    <h4>APPOINTMENT</h4>
                    <h1>Make an appointment <br/> Today</h1>
                    <h4 >It is a established fact that a reader will be distractedby the readable content of a page when looking at its</h4>
                    <button className='learn-btn'>Learn More</button>
                </div>
            </div>
            <div className='testimonial'>
                <div className='testimonial-first'>
                    <div className='first-text'>
                        <h4 className='h2'>TESTIMONIAL</h4>
                        <h1>What's Our Patients <br/> Says</h1>
                    </div>
                    <div className='first-icon'><FontAwesomeIcon className='faQuoteLeft'  icon={faQuoteLeft}/> </div>
                </div>
                <div className='testimonial-second'>
                    <div className='testimonial-deeb'>
                    <div> <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro animi velit dolorum  <br/> consectetur voluptas quos! <br/> Excepturi enim velit quos deleniti </p></div>
                        <div className='testimonial-text'>
                        <div><img src={one} alt="" srcset=""/></div>
                            <div >
                                <p className='h2'>Winston harry</p>
                                <small>California</small>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-deeb'>
                    <div> <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro animi velit dolorum  <br/> consectetur voluptas quos! <br/> Excepturi enim velit quos deleniti </p></div>
                        <div className='testimonial-text'>
                            <div><img src={two} alt="" srcset=""/></div>
                            <div >
                                <p className='h2'>Winston harry</p>
                                <small>California</small>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-deeb'>
                    <div> <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro animi velit dolorum  <br/> consectetur voluptas quos! <br/> Excepturi enim velit quos deleniti </p></div>
                          <div className='testimonial-text'>
                          <div><img src={three} alt="" srcset=""/></div>
                            <div >
                                <p className='h2'>Winston harry</p>
                                <small>California</small>
                            </div>
                          </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSirvice;