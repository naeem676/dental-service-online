import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faChessBoard, faCalendar, faUserAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Check.css';










const Check = () => {
    const [value, onChange] = useState(new Date());
    
    return (
        <div>
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
                    <div id="dashboard">
                        <div className="react-calendar">
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />

                        </div>
                        <div className="react-dashboard">

                        </div>
                    </div>
                    <div id="Appointment">Appointment</div>
                    <div id="Patients">Patients</div>
                    <div id="Prescriptions">Prescriptions</div>
                </div>
            </div>
        </div>
    );
};

export default Check;