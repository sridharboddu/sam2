import React,{useEffect} from 'react';
import {
  
  Link,
} from 'react-router-dom';

// Google
import { GoogleLogin } from 'react-google-login';
// import config from './config.json';

import './meeting.css';
export default function Login(props) {
  
  const googleResponse = (response) => {
    // console.log(response.Zi.access_token);
    if(response.Zi.access_token)
    {     
       localStorage.setItem("access_token",response.Zi.access_token)  
      props.history.push("/Availability"); 
     }  
    else
    {    
     alert("error");  
    }
  }
  // const onFailure = (response) => {
  //   console.log(response);
  // }
 
  // useEffect(() => {
  //   window.gapi.signin2.render('g-signin2', {
  //     'scope': 'https://www.googleapis.com/auth/plus.login',
  //     'width': 200,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //     'onsuccess': onSignIn
  //   })
  // })
 
  return (
    
    <div >
      <div class="backimg">
        <div class="row">
          <div class="col s4"></div>
           <div class="col s4  googlee">
            <p class="signwith">Sign in with Google to Continue</p>
            <div>
            <GoogleLogin class= "btn butngoogle"
                        clientId="69784952631-ntl47uqp2t0ti6r7k3tk04fjagiif4f4.apps.googleusercontent.com"
                      //   render={renderProps => (
                         
                      //  <button >
                      //    <img  src="./images/googlelogo.png "  class="left googicon"/>Sign in with Google </button>
                     
                      //   )}
                        buttonText="Sign in with Google"
                        onSuccess={googleResponse}
                        // onFailure={onFailure}
                        // cookiePolicy={'single_host_origin'}
                    />
             </div>
            {/* <Link to="/Availability"> 
            <button class= "btn butngoogle"><img  src="./images/googlelogo.png "  class="left googicon"/>Sign in with Google </button>
            </Link> */}
           </div> 
         <div class="col s4"></div>
       </div>
      </div>
    </div>
  );
}
