import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faChessBoard, faCalendar, faUserAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './Check.css';
import AppointmentDiv from '../appointment-div/AppointmentDiv';


const Check = () => {
    
    return (
        <div className='appointment-components'>
            <div className="check">
                <div className="drawer">
                    <p><FontAwesomeIcon  icon={faChessBoard} /> Dashboard</p><br/>
                    <p><FontAwesomeIcon  icon={faCalendar} /> Appointment</p><br/>
                    <p><FontAwesomeIcon  icon={faUserAlt} /> Patients</p><br/>
                    <p><FontAwesomeIcon  icon={faFileAlt} /> Prescriptions</p><br/>
                    <p><FontAwesomeIcon  icon={faCog} /> Setting</p>
                    <p  className="logout"> <FontAwesomeIcon  icon={faSignOutAlt} />  Log out</p>
                </div>
                <div className="list">
                <AppointmentDiv></AppointmentDiv>
                  
                    <div id="Dashboard">Dashboard</div>
                    <div id="Patients">Patients</div>
                    <div id="Prescriptions">Prescriptions</div>
                </div>
            </div>
        </div>
    );
};

export default Check;