import React,{useState} from 'react'
import {
  
  Link,
  
} from 'react-router-dom';

import '../components/meeting.css';
import Meeting from './Meeting';
import MyCalendar from './MyCalendar';
export default function PickTime() {
   let [show, setShow] = useState(true);
   const showHandler=()=>{
    setTimeout(() => setShow(false), 0);
    // setShow(false);
    
   }
   let submitButton=(e)=>{
    e.preventDefault();
    alert("hgh")
   }

    return (
        <div>           
             <div class="card pick-card">
              <div class="row">
                <div class="col s8 m8 l xl8 pick-time-card">
                   <div class="meet-card pickcard">
                     {/* <div class=""> */}
                      <Link to="Meeting" class="material-icons meet-icon"></Link>
                          {/* <div class="meet-icon"></div>   */}
                     {/* </div> */}
                      <div class="event-title">John Doe</div>
                        <div class="meeting-time">30 minutes of meeting</div>
                         <div class="row time-row">
                           <div class="col s1 m1 l1 xl1  mins"><i class="material-icons">access_time</i></div>
                           <div class="col s11 m11 l11 xl11 p0  "><span class="mins">30 mins</span></div>
                         </div>
                         <div class="select-time-pick">Select a Date and Time </div>
                       <div class="calendar-wdt">
                          <MyCalendar/>
                      </div>
                    </div>  

                </div>
                
                <div class="col s4 m4 l4 xl4">
                   <div class="day-text">Wednesday, July 06</div>
                   <div class="time-slot-main">                 
                  <a class=" btn time-btn ">09:00 AM</a>
                   <a class=" btn time-btn ">09:30 AM</a>
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
              </div>
             </div>         
        </div>
    )
}
