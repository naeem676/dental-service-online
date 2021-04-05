import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../App';

const AppointmentDiv = () => {
    const [loggInUser, setLoggInUser] = useContext(UserContext);
   
    const [value, onChange] = useState(new Date());
    const [petition, setPetition] = useState([]);
    const date = value.getDate();
    const year = value.getFullYear();
    const month = value.toLocaleDateString('default', { month: 'short' });
    const makeDate =   date + ' ' + month + ','   +  year;

    useEffect(()=>{
        fetch('https://protected-headland-06474.herokuapp.com/petitions?email=' + loggInUser.email, {
            method:"GET",
            headers:{
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setPetition(data)
        })
    },[])
    
    return (
        <div>
        <div>
        <h1>Appointment</h1></div>
                   <div className="appointment">
                    
                    <div className="react-calendar">
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />

                    </div>
                    <div className="react-appointment">
                    <div className="appointment-date">
                        <h4 className='h2'>Appointment</h4>
                        <p>{makeDate}</p>
                    </div>
                    
                    {
                        petition.map(human => 
                      
                       <div className="all-petition">
                        <p>
                            Name : {human.Petition.name}
                        </p> 
                        <p className="all-div">
                            Schedule : {human.Appointment.time}
                            
                        </p>
                        <p className="all-div">
                           Action : <button>Not visited</button>
                            
                        </p>
                        </div>
                       )
                    }

                    </div>
                    </div>
        
            
        </div>
    );
};

export default AppointmentDiv;