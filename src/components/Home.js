import React,{ useState } from 'react'
import '../components/meeting.css';
import {Link} from 'react-router-dom';

import Header from './Header';
import TodayMeeting from './TodayMeeting';
import ScheduleMeeting from './ScheduleMeeting';
export default function Home() {
  let[show,setShow]=useState(true);
    const todayHandler=()=>{
      setShow(true);
    }
    const scheduleHandler=()=>{
      setShow(false);
    }
  return (
    <div>
        <Header/>
       <div class="row">
          <div class="col s1 m1 l1 xl1 m0 lft-space"></div>
          <div class="col s11 m11 l11 xl11">
            <div class="card home-card">
              <div class="row pick-link">
                <div class="col s12 m1 l1 xl1"> 
                
                 <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                 
                </div>
                <div class="col s12 m11 l11 xl11">
                   <div class="usr-nam">Sainik Akkasali</div>
                <Link to="/Meeting">
                  <div class="usr-link">sam.com/sainik.akkasali@purviewservices.com</div>
                  </Link>
                </div>
              </div>


              
              <div class="row">
                  
                   <div class="col s6 m2 l2 xl2">
                                 
                       <a class=" td-mtg" onClick={todayHandler}>Today Meetings</a> 
                  
                   </div>
                   <div class="col s6 m10 l10 xl10">
                   <a class=" td-mtg " onClick={scheduleHandler}>Scheduled Meetings</a>
                   </div>
                  
                
              </div><br/>
              <div class="home-divider">
              <div class="divider " tabindex="-1"></div>
              </div>
              {/* <hr class="hr-line"></hr> */}
                   { 
                      show ? 
                         <TodayMeeting/>:
                         <ScheduleMeeting/>
                    }
            </div>
          </div>
       </div>
    </div>
  )
}
