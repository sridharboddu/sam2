import React from 'react';
import './meeting.css';

export default function UserDetails() {
    return (
        <div>
            <div class="card user-card">
      <div class="">
      <i class="material-icons meet-icon"></i>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">John Doe</div>
      <div class="meeting-time ">30 minutes of meeting</div>
      <div class="row time-row mb0">
       <div class="col s1 m1 l1 xl1  mins"><i class="material-icons">access_time</i></div>
       <div class="col s11 m11 l11 xl11 "><span class="mins">30 mins</span></div>
      </div>
      <div class="row calendar-row mb0">
       <div class="col s1 m1 l1 xl1  calendar-mins"><i class="material-icons">access_time</i></div>
       <div class="col s11 m11 l11 xl11">
        <span class="calendar-mins">10.00 AM-10.30 AM Wednesday July 06,2019</span>
        </div>
      </div>
      <div class="enter-details">Enter Details </div> 
      <form>
          <div class="form-field">
      <div class="input-field">
        <label class="frm-label">Name<sup>*</sup></label>
          <input placeholder="" id="first_name" type="text" class="validate user-input"/>
          
        </div>
        <div class="input-field">
          <input placeholder="" type="text" class="validate user-input"/>
          <label class="frm-label">Email<sup>*</sup></label>
        </div>
        <a class=" btn add-btn ">Add Guests</a>
       
        <div class="input-field">
          <textarea placeholder="" type="text" class="validate user-input-area"></textarea>
          {/* <textarea></textarea> */}
          <label class="frm-label-area">Description about your meeting</label>
        </div>
        <a class=" btn add-btn-meeting ">Schedule Meeting</a>
        </div>
      </form>
        </div>
        </div>
    )
}
