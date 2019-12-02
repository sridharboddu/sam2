import React from 'react'
import '../components/meeting.css';
export default function Header() {
  return (
    <div>
      <nav>
       <div className="nav-wrapper black-text white">
     {/* <a href="#" class="brand-logo center">Logo</a> */}
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li> <i className="material-icons menu" >menu</i></li>
       <li>
           <form>
       <div className="input-field inp" >
         
         <i className="material-icons prefix searchicon">search</i>
         <input id="search" type="text" placeholder="Search"  required/>
         <a className="waves-effect waves-light btn white black-text">Search</a>
       </div>
     </form>
    </li>
     </ul>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><b class="namcnr" >Sainik Akkasali</b></li>
    <li className=" collection-item dispic"> 
    <img src="./images/avatar4.png" width="45px" height="45px" className="topimg circle"/>
    </li>
     </ul>
   </div>
  </nav>
     
    {/* <div class="row">
    <div class="col s1 m0 ">khhh  </div>
    <div class="col s11">
    bjhbh
    </div>
    </div> */}
    </div>
  )
}
