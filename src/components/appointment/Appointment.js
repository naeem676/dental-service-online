import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import chair from "../../images/Mask Group 1.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogActions } from '@material-ui/core';



library.add(fab);



const Appointment = () => {
    const [open, setOpen] = useState(false);
    const [value, onChange] = useState(new Date());
    const [appointment, setAppointment] = useState({name:'', time:'', book:''});
    const [user, setUser] = useState({time: appointment.time, name:'', number:'', email:'', date:''})
    const month = value.toLocaleDateString('default', { month: 'long' });
    const date = value.getDate();
    const year = value.getFullYear();
    // const makeDate = date + '/' + value.getMonth() + '/' + year;
    const makeTime = value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds()
    
    
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

     
     

      const handleOnBlur = e =>{
          const newUser = {...user};
          newUser[e.target.name] = e.target.value;
          setUser(newUser);
        
      }
      const handleSubmit = e => {
          const newUser = {...user};
          setUser(newUser);
          console.log(newUser)
         
          
        e.preventDefault()
      }
    
      
    const handleOne = () =>{

        const one = {
            name:'Teeth Cleaning',
            time:'5:00 pm - 6.30 pm',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();

    }
    const handleTwo = () =>{

        const one = {
            name:'Cosmetic Dentistry',
            time:'10:00 pm - 11.30 am',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();


    }
    const handleThree = () =>{

        const one = {
            name:'Teeth Orthodontics',
            time:'8:00 pm - 9.30 am',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();

    }
    const handleFour = () =>{

        const one = {
            name:'Cavity Protection',
            time:'7:00 pm - 8.30 pm',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();

    }
    const handleFive = () =>{

        const one = {
            name:'Cosmetic Dentistry',
            time:'8:00 pm - 9.30 pm',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();

    }
    const handleSix = () =>{

        const one = {
            name:'Teeth Cleaning',
            time:'9:00 pm - 10.30 pm',
            book: makeTime
        }
        setAppointment(one);
        handleClickOpen();

    }
    
    
    
    return (
        <div className='appointment-components'>
            <div className='appointment-header'>
                    <div className='nav-div'>
                <nav className='nav'>
                    <Link style={{textDecoration:'none'}} to='/home'><p className='nav-p'>Home</p></Link>
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
                            // onChange={onChange}
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
                <button onClick={handleOne} className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
               <h3 className='h2'>Cosmetic Dentistry</h3>
                <p>10:00 pm - 11.30 am</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button onClick={handleTwo}  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
              <h3 className='h2'>Teeth Orthodontics</h3>
                <p>8:00 pm - 9.30 am</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button onClick={handleThree}  className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            </div>
            <div className='main-one'>
            <div className='shedule'>
               <h3 className='h2'>Cavity Protection</h3>
                <p>7:00 pm - 8.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button onClick={handleFour} className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
            <h3 className='h2'>Cosmetic Dentistry</h3>
                <p>8:00 pm - 9.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button onClick={handleFive} className='footer-submit'>BOOK APPOINTMENT</button>
            </div>
            <div className='shedule'>
            <h3 className='h2'>Teeth Cleaning</h3>
                <p>9:00 pm - 10.30 pm</p>
                <small>10 SPACES AVAILABLE</small><br/>
                <button onClick={handleSix} className='footer-submit'>BOOK APPOINTMENT</button>
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
             <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Booking Form</DialogTitle>
                
                <DialogContent>
                <form onSubmit={handleSubmit} >
                <TextField autoFocus margin="dense" onBlur={handleOnBlur} name="time" id="time" value={appointment.time}  fullWidth required />
                <TextField autoFocus margin="dense" onChange={handleOnBlur}  name="name"   label="Your Name" type="text" fullWidth required />
                <TextField autoFocus margin="dense" onChange={handleOnBlur}  name="number" label="Your Number" type="number" fullWidth required/>
                <TextField autoFocus margin="dense" onChange={handleOnBlur}  name="email" label="Email Address" type="email" fullWidth required/>
                <TextField autoFocus margin="dense" onChange={handleOnBlur}  name="date" id="date"  type="date" fullWidth required/>
                
                <DialogActions>
                <Button type="submit" color="primary">send</Button>
                </DialogActions>

               
                
                </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Appointment;