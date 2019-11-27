import React, { useState } from 'react'
import '../components/meeting.css';
export default function ScheduleMeeting() {
  let [show,setShow]=useState(true);
  let [accept, setAccept]=useState(false);
  let [decline,setDecline]=useState(false);
   let scheduleAcceptHandler=()=>{
      setShow(false);
      setAccept(true);
      setDecline(false);
    }
    let scheduleDeclineHandler=()=>{
      setShow(false);
      setAccept(false);
      setDecline(true);
    }
  return (
    <div>
       <div class="row">
                <div class="ntf-card">
                 <div class=" col s6 m6 l6 xl6 ">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 m2 l2 xl2 img-content">
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                       
                      </div>
                      <div class="col s6 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 m4 l4 xl4 card-btn-ntf ">
                      {/* <a class=" btn-small btn-ntf green accent-3">Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a> */}
                      {
                        show?(
                          <div>
                            <a class=" btn-small btn-ntf green accent-3" onClick={scheduleAcceptHandler}>Accept</a>
                            <a class=" btn-small btn-ntf red"onClick={scheduleDeclineHandler}>Decline</a>
                          </div>
                        ):""
                      }
                      {
                        accept?(
                          <div class="hide-btn-home">
                            <a class=" btn-small btn-ntf green accent-3">Accepted</a>
                          </div>
                        ):""
                      }
                      {
                        decline?(
                          <div class="hide-btn-home">
                            <a class=" btn-small btn-ntf red">Declined</a>
                          </div>
                        ):""
                      }
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m6 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 s2 m2 l2 xl2 img-content">
                        {/* <div class="avtr-img"></div>  */}
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small btn-ntf green accent-3">Accept</a>

                      <a class=" btn-small btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m6 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 m2 l2 xl2 img-content">
                        {/* <div class="avtr-img"></div>  */}
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small btn-ntf green accent-3">Accept</a>

                      <a class=" btn-small btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m6 l6 xl6 ">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 m2 l2 xl2 img-content">
                        {/* <div class="avtr-img"></div>  */}
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small btn-ntf green accent-3">Accept</a>

                      <a class=" btn-small btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m6 l6 xl6 ">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 m2 l2 xl2 img-content">
                        {/* <div class="avtr-img"></div>  */}
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s12 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m6 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 m2 l2 xl2 img-content">
                        {/* <div class="avtr-img"></div>  */}
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6 usr-shd">
                        <div class="usr-card-lab-shd">Jhon Doe</div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">access_time</i>
                        11:00 AM-11:30 AM
                        </div>
                        <div class="usr-card-shd">
                        <i class="material-icons acs-time-shd">date_range</i>
                        06 November 2019
                        </div>
                      </div>
                      <div class="col s4 s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>                                 
                </div>
              </div>
    </div>
  )
}
