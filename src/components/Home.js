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
                <div class="col s12 m12 l1 xl1"> 
                
                 <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                 
                </div>
                <div class="col s12 m12 l11 xl11">
                   <div class="usr-nam">Sainik Akkasali</div>
                <Link to="/Meeting">
                  <div class="usr-link">sam.com/sainik.akkasali@purviewservices.com</div>
                  </Link>
                </div>
              </div>


              <div class="row">
                <div class="col s6 m6 l6 xl6">
                <ul class="tabs row">
                   <li class="tab col s12 m4 l4 xl4 p0 m0 tab-width">
                       <a class="active td-mtg" onClick={todayHandler}>Today Meetings</a>
                   </li>
                   <li class="tab col s12 m5 l5 xl5 p0 m0 tab-width2">
                   <a class=" td-mtg " onClick={scheduleHandler}>Scheduled Meetings</a>
                   </li>
              </ul>

                </div>
                <div class="col s3"></div>
                <div class="col s3"></div>
              </div>
              {/* <br/> */}
              <div class="home-divider">
              <div class="divider "></div>
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
