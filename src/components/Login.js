import React from 'react';
import {
  
  Link,
} from 'react-router-dom';

// Google
import { GoogleLogin } from 'react-google-login';
// import config from './config.json';

import './meeting.css';
export default function Login() {

  const googleResponse = (response) => {
    console.log(response);
  }
  const onFailure = (response) => {
    console.log(response);
  }
  return (
    <div >
      <div class="backimg">
        <div class="row">
          <div class="col s4"></div>
           <div class="col s4  googlee">
            <p class="signwith">Sign in with Google to Continue</p>
            <div>
            <GoogleLogin
                        clientId={"69784952631-ntl47uqp2t0ti6r7k3tk04fjagiif4f4.apps.googleusercontent.com"}
                      //   render={renderProps => (
                         
                      //  <button class= "btn butngoogle">
                      //    <img  src="./images/googlelogo.png "  class="left googicon"/>Sign in with Google </button>
                     
                      //   )}
                        buttonText="Sign in with Google"
                        onSuccess={googleResponse}
                        onFailure={onFailure}
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
