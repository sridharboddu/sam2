import React,{ useState } from 'react';
import '../components/meeting.css';
import {
  
    Link,
    
  } from 'react-router-dom';

function TimeSlot (){
    let [show, setShow] = useState(true);
   const showHandler=()=>{
     
    setShow(false);
    
   }
    return(
        <div>
            <div class="day-text">Wendesday,July 06</div>
                   <div class="time-slot-main">                 
                   <div> <a class=" btn time-btn ">09:00 AM</a></div>
                  <div> <a class=" btn time-btn ">09:30 AM</a></div>
                   {
                       show ? 
                   <a class=" btn time-btn " onClick={showHandler}>10:00 AM</a>:
                
                   (
                     <div class="row hide-btn mb0">
                        <div class="col s6 m6 l6 xl6 "><a class=" btn time-btn-hide ">10:00 AM</a></div> 
                        <div class="col s6 m6 l6 xl6"><Link to="/UserDetails" class=" btn confirm-btn-hide ">Confirm</Link></div>
                     </div>
                   )
                   
                
                   }
                   <div><a class=" btn time-btn ">10:30 AM</a></div>
                   <div><a class=" btn time-btn ">11:00 AM</a></div>
                   <div><a class=" btn time-btn ">11:30 AM</a></div>
                   <div><a class=" btn time-btn ">12:00 PM</a></div>

                   <div><a class=" btn time-btn ">10:30 AM</a></div>
                   <div><a class=" btn time-btn ">11:00 AM</a></div>
                   <div><a class=" btn time-btn ">11:30 AM</a></div>
                   <div><a class=" btn time-btn ">12:00 PM</a></div>
                   </div>
        </div>
    );
}
export default TimeSlot;