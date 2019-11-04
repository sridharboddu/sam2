import React,{useState} from 'react';
// import './Login.css';
import '../components/meeting.css';
import Axios from 'axios';
export default function Login() {
  const[mail,setMail]=useState('');
  const[pass,SetPass]=useState('');
  const [data,setData]=useState('');
  let submitButton=(e)=>{
    e.preventDefault();
    const email=mail;
    const password=pass;
     Axios.post("https://calendly-app.herokuapp.com/api/rest-auth/login/",{email,password})
     .then(resp=>{setData(resp.data)
      //.then(resp=>{console.log(resp.data)

     localStorage.setItem("token",resp.data.key)
     })
  }
  return (
    <div class="bgimg">
     
      <form class="frm">
        <div class="row">
        {/* <div class="input-field col s1"></div> */}
         <div class="input-field col s4">
          <h5 class="sin">Sign In</h5><br/>
           <div class="ipb">
            <label class="ename" for="usname">Email</label>
           <input  placeholder="abc@gmail.com" name='mail' id="usname" type="text"
             class="validate " autocomplete="off"
            onChange={e=>setMail(e.target.value)} />
           
           {/* <i class="material-icons prefix validate">email</i> */}
         </div>
           <div class="ipb">
            <label class="pname" for="psname">Password</label>
             <input   placeholder="**********" id="psname" name="pass" type="password"
              class="validate  autocomplete"autocomplete="off"
               onChange={e=>SetPass(e.target.value)}/>
             {/* <i class="material-icons prefix validate">password</i> */}
       </div>
          {/* <p class="fog"><b>Forgot password?</b></p>   */}
            <a href=" " class="fog"> <b>Forgot password?</b></a><br/><br/>
          <button type="button" class="bloc" onClick={submitButton}  ><b>Sign In</b></button>
       </div>
        
      </div> 
     </form>
     </div>
  
  );
}
