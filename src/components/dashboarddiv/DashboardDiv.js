// import React, { useEffect, useState } from 'react';
// import './DashboardDiv.css';

// const DashboardDiv = () => {
//     const [petition, setPetition] = useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:5000/petitions')
//         .then(res => res.json())
//         .then(data => {
//             setPetition(data)
//         })
//     },[])
//     console.log(petition);
//     return(
//         <div>
//         <div className="total-length">
            
//             <h4>Total Appointment : </h4>
//             <h4>{petition.length}</h4>
//         </div>
//         <div className="react-appointment">
//             <h4>Recent Appointment</h4>
//             {
//                 petition.map( human => 
//                 <div className="all-petition" key={human._id}>
//                     <p className="al-div"> {human.petition.name}</p>
//                     <p className="al-div">{human.time} </p>
//                     <p className="al-div">{human.petition.date}</p>
//                     <p className="al-div">{human.petition.number}</p>
//                     <p className="al-div"><button>view</button></p>
//                     <p className="al-div"><button>Pending</button></p>
//                 </div>)
//             }
//         </div>
        

//         </div>
//     )
// };

// export default DashboardDiv;