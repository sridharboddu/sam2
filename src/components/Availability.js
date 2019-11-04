import React from 'react';
// import './Availability.css';
import '../components/meeting.css';
export default function Availability() {
  return (
    <div>
         <div class="row gap">
             <div class="col s6 picture"></div>
             <div class="col s6 brdr">
             <form class="f-m">
               <div class="svab">Select Your Availability</div>
               <div class="work-hrs">Working Hours</div>
        
         <div class="row ">
         <div class="col s6 from-to ">
         <div class="col s3 frda"><p>From</p></div>
         <div class="col s9 slttime "> 
         <select class="browser-default  selbox">
     <option value="1" disabled selected>9:00AM</option> 
    {/* <option value="1">9:00AM</option> */}
     <option value="2">10:00AM</option>
    <option value="3">11:00AM</option>
    <option value="4">12:00PM</option>
    <option value="5">01:00PM</option>
    <option value="6">02:00PM</option>
    <option value="7" >03:00PM</option>
    <option value="8" >04:00PM</option>
    <option value="9" >05:00PM</option>
  </select>
  </div>
         </div>
         <div class="col s6 to-from">
         <div class="col s3 tda"><p>To</p></div>
         <div class="col s9 slttime"> 
          <select class="browser-default  selbox">
     <option value="1" disabled selected>9:00AM</option> 
    {/* <option value="1">9:00AM</option> */}
     <option value="2">10:00AM</option>
    <option value="3">11:00AM</option>
    <option value="4">12:00PM</option>
    <option value="5">01:00PM</option>
    <option value="6">02:00PM</option>
    <option value="7" >03:00PM</option>
    <option value="8" >04:00PM</option>
    <option value="9" >05:00PM</option>
  </select>
  </div>
         </div>
         </div>
<div class="workdays">Working days</div>
<div class="row  weeks" >
<div class="col 1"></div>
<div class="col 1"></div>
{/* <div class="col 1"></div> */}

<div   class=" col 1 sun"  > <input name="group1"  type="radio" class="radio-btn" />
<p class=" sun-label" >Sun</p></div>
<div class="mon col 1"  ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label" >Mon</p></div>


<div  class="tue col 1"  ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label">Tue</p></div>
  <div class="wed col 1 "   ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label">Wed</p></div>
  <div  class="thur col 1"  ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label">Thu</p></div>
  <div  class="fri col 1"  ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label">Fri</p></div>
  <div class="sat col 1"   ><input name="group1" type="radio" class="radio-btn" /><p class="  sun-label">Sat</p></div>
</div>
<div class="nextb">
  <button class="nxt-btn">Next  </button>




</div>
              </form> 
             </div>
            </div> 

               {/* <div class="row">
            <div class="col s1"></div>
            <div class="col s5 picture"></div>
            <div class="col s5">
            <form class="f-m">
               <div class="svab">Select Your Availability</div>
               <div class="work-hrs">Working Hours</div>
               <div class="from-to">
               
      
               <div class="row">
    <div class="col s12 m6 l3"><p>From</p></div>
    <div class="col s12 m6 l3">
    <select class="browser-default">
    <option value="" disabled selected>Choose your option</option>
    
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
    </div>
    <div class="col s12 m6 l3"><p>TO</p></div>
    <div class="col s12 m6 l3">
    <select class="browser-default">
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
    </div> 
   </div>  */}



               {/* </div>
              </form> 
            </div>
            <div class="col s1"></div>

            </div>  */}
            </div>
  );
}
