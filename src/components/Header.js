import React,{useEffect} from 'react'
import M from "materialize-css";
import '../components/meeting.css';
function Header() {

  useEffect(()=>{
    
      let dropdown = document.querySelectorAll('.dropdown-trigger');
       M.Dropdown.init(dropdown);
    
  });
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
    <li className=" collection-item dispic dropdown-trigger" href='#' data-target='dropdown1'> 
    <img src="./images/avatar4.png" width="45px" height="45px" className="topimg circle"/>
    
    <ul id='dropdown1' class='dropdown-content '>
    <li><a href="#!">My profile</a></li>
    <li><a href="#!">Log out</a></li>
    {/* <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li> */}
  </ul>
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
export default Header;
