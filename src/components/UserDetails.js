import React, { useState } from 'react';
import { 
  Link,
  
} from 'react-router-dom';
import axios from 'axios';

import './meeting.css';

 function UserDetails() {
  let [addguestshow,setAddguestshow]=useState(false);
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [guestemail,setGuestEmail]=useState("");
  let [description,setDescription]=useState("");
  // let [addguest,setAddGuest]=useState("");
  let addguestHandler=()=>{
    setAddguestshow(true); 
  }
  let usersubmitHandler=(e)=>{
    e.preventDefault(e);
   
  //  alert(name+email+description+guestemail)
  let formdata={
    name:name,
    email:email,
    start_date_time: "2019-11-17T00:00:00Z",
    desciption: description,
    guest_name: [
        {
            Guest_email:guestemail,
        },
        
    ]
  }
    axios.post("https://purview-sam-app.herokuapp.com/api/schedule/",
     formdata,
    )
   
    .then(resp=>console.log(resp.data));
  }
    return (
        <div>
            <div class="card user-card">
         <div class="">
      <Link to="PickTime" class="material-icons meet-icon"></Link>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">John Doe</div>
      <div class="meeting-time ">30 minutes of meeting</div>
      <div class="row time-row mb0">
       <div class="col s1 m1 l1 xl1  mins"><i class="material-icons">access_time</i></div>
       <div class="col s11 m11 l11 xl11 p0"><span class="mins">30 mins</span></div>
      </div>
      <div class="row calendar-row mb0">
       <div class="col s1 m1 l1 xl1  calendar-mins"><i class="material-icons">date_range</i></div>
       <div class="col s11 m11 l11 xl11 p0">
        <span class="calendar-mins">10.00 AM-10.30 AM Wednesday July 06,2019</span>
        </div>
      </div>
      <div class="enter-details">Enter Details </div> 
      <form onSubmit={usersubmitHandler}>
          <div class="form-field">
      <div class="input-field mb0">
          <label class="frm-label">Name<sup>*</sup></label>
          <input placeholder=" " id="first_name" type="text" class="validate user-input"
           onChange={(e)=>setName(e.target.value)}
          />
          
        </div>
        <div class="input-field mb0">
        <label class="frm-label">Email<sup>*</sup></label>
          <input placeholder=" " type="email" class="validate user-input"
          onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        {
          addguestshow?(
            <div class="input-field mb0">
             <label class="frm-label">Add Guest Email</label>       
          <input placeholder=" " type="email" class="validate user-input"
          onChange={(e)=>setGuestEmail(e.target.value)}
          />
          <p>Notify up to 10 additional guests of the scheduled event</p>
        </div>
          ):<a class=" btn add-btn" onClick={addguestHandler} >Add Guests</a>
        }
        
       
        <div class="input-field mb0">
          <label class="frm-label-area">Description about your meeting</label>
          <textarea placeholder=" " type="text" class="validate user-input-area"
          onChange={(e)=>setDescription(e.target.value)}
         />
          {/* <textarea></textarea> */}
          
          </div>
       <div class="add-schedule-btn">
        <button  class=" btn add-btn-meeting ">Schedule Meeting</button>
        </div>
        </div>
        
      </form>
        </div>
        </div>
    )
}
export default UserDetails;
