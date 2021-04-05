import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faChessBoard, faCalendar, faUserAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './Check.css';
import AppointmentDiv from '../appointment-div/AppointmentDiv';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../App';




const Check = () => {
    const [loggInUser, setLoggInUser] = useContext(UserContext)
    const history = useHistory();

    const handleLogOut = () =>{
       
        setLoggInUser({})
        history.push('/home')
    }
   

    
    return (
        <div className='appointment-components'>
            <div className="check">
                <div className="drawer">
                    <p><FontAwesomeIcon  icon={faChessBoard} /> Dashboard</p><br/>
                    <Link style={{textDecoration:'none', color:'white'}} to='/appointment'><p><FontAwesomeIcon  icon={faCalendar} /> Appointment</p></Link><br/>
                    <p><FontAwesomeIcon  icon={faUserAlt} /> Patients</p><br/>
                    <p><FontAwesomeIcon  icon={faFileAlt} /> Prescriptions</p><br/>
                    <p><FontAwesomeIcon  icon={faCog} /> Setting</p>
                   <Link onClick={handleLogOut}  style={{textDecoration:'none', color:'white'}}> <p className="logout"> <FontAwesomeIcon  icon={faSignOutAlt} />  Log out</p></Link>
                </div>
                <div className="list">
                 <div>
                 <AppointmentDiv></AppointmentDiv>
                    </div>
                  
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Check;