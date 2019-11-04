import React from 'react'
import '../components/meeting.css';
import Header from './Header';
export default function Home() {
  return (
    <div>
        <Header/>
       <div class="row">
          <div class="col s1 m0 lft-space"></div>
          <div class="col s11">
            <div class="card home-card">
              <div class="row pick-link">
                <div class="col s1"> 
                 <div class="user-img">
                   <img src="./images/avtar.png" class="circle" alt="user avtar"/>
                 </div>
                </div>
                <div class="col s11">
                   <div class="usr-nam">Sainik Akkasali</div>
                   <div class="usr-link">sam.com/sainik.akkasali@purviewservices.com</div>
                </div>
              </div>
              <div class="row">
                  <div clas="col s12">
                   <div class="col s2 "><label class="td-mtg">Today Meetings</label></div>
                   <div class="col s10"><label class="td-mtg">Scheduled Meetings</label></div>
                  </div>
                  {/* <div clas="col s8 ">12313</div> */}
              </div>
              <hr class="hr-line"></hr>
              <div class="row">
                <div class="col 12 ntf-card">
                 <div class=" col s6 ">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class="col s6">
                   <div class="card usr-ntf">
                   <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class="col s6">
                   <div class="card usr-ntf">
                   <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class="col s6">
                   <div class="card usr-ntf">
                   <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class="col s6">
                   <div class="card usr-ntf">
                   <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class="col s6">
                   <div class="card usr-ntf">
                   <div class="row crd-cntt">
                      <div class="col s3">
                        <img src="./images/avtar.png" class="circle" alt="avtar"/>
                      </div>
                      <div class="col s5">
                        <span class="usr-card-lab">Jhon Doe</span><br/><br/>
                        <span class="usr-card-time">
                        <i class="material-icons ">access_time</i>11:00 AM-11:30
                         
                        </span>
                      </div>
                      <div class="col s4 card-btn-ntf ">
                      <a class=" btn-small primary btn-ntf green accent-3">Accept</a><br/><br/>

                      <a class=" btn-small danger btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div>                                 
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}
