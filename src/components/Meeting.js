import React from 'react'
import '../components/meeting.css';
import MyCalendar from './MyCalendar';
export default function Meeting() {
  return (
    <div>
     <div class="card meet-card">
      <div class="">
      <i class="material-icons meet-icon"></i>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">John Doe</div>
      <div class="meeting-time">30 minutes of meeting</div>
      <div class="row time-row">
       <div class="col s1 m1 l1 xl1  mins"><i class="material-icons">access_time</i></div>
       <div class="col s11 m11 l11 xl11 "><span class="mins">30 mins</span></div>
      </div>
      <div class="select-time">Select a Date and Time </div>
      <div>
          <MyCalendar />
      </div>
     </div>
    </div>
  )
}