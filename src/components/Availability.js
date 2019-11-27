import React from 'react';
import './meeting.css';
import{Link} from 'react-router-dom';
export default function Availability(){
  return (
           <div>
             <div class="row wholee">
              <div class="col s6 picture">
               </div>
           <div class="col s6 mater">
               <div class="setavailable">Set Your Availability</div>
                  <div class="workhrs" > Working hours</div>
                   <div class="row high">
                    <div class="col s6 from-to">
                     <div class="col s3 frda"><p class="frm">From</p></div>
                       <div class="col s6 slttime">
                        <select class="browser-default  selbox">
                          <option value="0" disabled selected>09:00 AM</option> 
                          <option value="1">09:00 AM</option>
                          <option value="2">09:30 AM</option>
                          <option value="3">10:00 AM</option>
                          <option value="4">10:30 AM</option>
                          <option value="5">11:00 AM</option>
                          <option value="6">11:30 AM</option>
                          <option value="7">12:00 PM</option>
                          <option value="8">12:30 PM</option>
                          <option value="9">01:00 PM</option>
                          <option value="10">01:30 PM</option>
                          <option value="11">02:00 PM</option>
                          <option value="12">02:30 PM</option>
                          <option value="13">03:00 PM</option>
                          <option value="14">03:30 PM</option>
                          <option value="15">04:00 PM</option>
                          <option value="16">04:30 PM</option>
                          <option value="17">05:00 PM</option>
                          <option value="18">05:30 PM</option>
                          <option value="19">06:00 PM</option>
                          <option value="20">06:30 PM</option>
                          <option value="21">07:00 PM</option>
                          <option value="22">07:30 PM</option>
                          <option value="23">08:00 PM</option>
                          <option value="24">08:30 PM</option>
                          <option value="25">09:00 PM</option>
                          <option value="26">09:30 PM</option>
                          <option value="27">10:00 PM</option>
                          <option value="28">10:30 PM</option>
                          <option value="29">11:00 PM</option>
                          <option value="30">11:30 PM</option>
                          <option value="31">12:00 AM</option>
                          <option value="32">12:30 AM</option>
                          <option value="33">01:00 AM</option>
                          <option value="34">01:30 AM</option>
                          <option value="35">02:00 AM</option>
                          <option value="36">02:30 AM</option>
                          <option value="37">03:00 AM</option>
                          <option value="38">03:30 AM</option>
                          <option value="39">04:00 AM</option>
                          <option value="40">04:30 AM</option>
                          <option value="41">05:00 AM</option>
                          <option value="42">05:30 AM</option>
                          <option value="43">06:00 AM</option>
                          <option value="44">06:30 AM</option>
                          <option value="45">07:00 AM</option>
                          <option value="46">07:30 AM</option>
                          <option value="47">08:00 AM</option>
                          <option value="48">08:30 AM</option>
                         </select>
                   </div>
             </div>
      <div class="col s6 to-from">
            <div class="col s3 tda"><p class="toadj">To</p></div>
                  <div class="col s6 slottime"> 
                       <select class="browser-default  selbox">
                            <option value="1" disabled selected>05:00 PM</option> 
                            <option value="2">05:30 PM</option>
                            <option value="3">06:00 PM</option>
                            <option value="4">06:30 PM</option>
                            <option value="5">07:00 PM</option>
                            <option value="6">07:30 PM</option>
                            <option value="7" >08:00 PM</option>
                            <option value="8" >08:30 PM</option>
                            <option value="9" >09:00 PM</option>
                            <option value="10">09:30 PM</option>
                            <option value="11">10:00 PM</option> 
                            <option value="12">10:30 PM</option>
                            <option value="13">11:00 PM</option>
                            <option value="14">11:30 PM</option>
                            <option value="15">12:00 AM</option>
                            <option value="16" >12:30 AM</option>
                            <option value="17">01:00 AM</option>
                            <option value="18">01:30 AM</option>
                            <option value="19">02:00 AM</option>
                            <option value="20">02:30 AM</option>
                            <option value="21">03:00 AM</option>
                            <option value="22">03:30 AM</option>
                            <option value="23">04:00 AM</option>
                            <option value="24">04:30 AM</option>
                            <option value="25">05:00 AM</option>
                            <option value="26">05:30 AM</option>
                            <option value="27">06:00 AM</option>
                            <option value="28">06:30 AM</option>
                            <option value="29" >07:00 AM</option>
                            <option value="30">07:30 AM</option>
                            <option value="31">08:00 AM</option>
                            <option value="32">08:30 AM</option>
                            <option value="33">09:00 AM</option>
                            <option value="34">09:30 AM</option>
                            <option value="35">10:00 AM</option>
                            <option value="36">10:30 AM</option>
                            <option value="37">11:00 AM</option>
                            <option value="38">11:30 AM</option>
                            <option value="39">12:00 PM</option>
                            <option value="40">12:30 PM</option>
                            <option value="41">01:00 PM</option>
                            <option value="42">01:30 PM</option>
                            <option value="43">02:00 PM</option>
                            <option value="44">02:30 PM</option>
                            <option value="45">03:00 PM</option>
                            <option value="46">03:30 PM</option>
                            <option value="47">04:00 PM</option>
                            <option value="48">04:30 PM</option>
                           </select>
                         </div>
                     </div>
               </div>
       <div class="workdays">Working Days</div>
          <div class="row weeks">
             {/* <div class="col s1 "></div> */}
                 <div class="col s1 boxbdr">
                     <label class="cont"><input type="checkbox"  id="checkbox"  /><br/>
                         <p class="sun-label ">Sun</p>
                          <span class="checkmark">
                          </span>
                    </label>
                 </div>
           <div class="col s1 boxbdr  ">
                   <label class="cont"><input type="checkbox"  id="checkbox" /><br/>
                        <p class=" sun-label" >Mon</p>
                         <span class="checkmark"> 
                          </span>
                   </label>
          </div>
             <div class="col s1 boxbdr ">
                    <label class="cont"><input type="checkbox"  id="checkbox" /><br/>
                        <p class=" sun-label" >Tue</p>
                          <span class="checkmark">

                           </span>
                     </label>
             </div>
                 <div class="col s1 boxbdr ">
                     <label class="cont"><input type="checkbox"  id="checkbox" /><br/>
                          <p class=" sun-label" >Wed</p>
                            <span class="checkmark">

                           </span>
                     </label>
                 </div>
                   <div class="col s1 boxbdr ">  
                       <label class="cont"><input type="checkbox"  id="checkbox" /><br/>
                          <p class=" sun-label" >Thu</p>
                            <span class="checkmark">
                            </span>
                        </label>
                   </div>
                     <div class="col s1 boxbdr "> 
                        <label class="cont"><input type="checkbox"  id="checkbox" /><br/>
                          <p class=" sun-label" >Fri</p>
                              <span class="checkmark">

                              </span>
                          </label>
                     </div>
                   <div class="col s1 boxbdr " > 
                        <label class="cont"><input type="checkbox"  id="checkbox"/><br/>
                            <p class=" sun-label ">Sat</p>
                               <span class="checkmark">

                               </span>
                            </label>
                      </div>
          </div>
        <div class="nextb">
            <Link to="/Home"> <button class="nxt-btn">Next</button></Link>

        </div>
      </div>
     </div> 
    </div>      
  );
}
