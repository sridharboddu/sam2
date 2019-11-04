import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import Calendar from './calendar/Calendar';
import MyCalendar from './components/MyCalendar';
import Meeting from './components/Meeting';
import UserDetails from './components/UserDetails';
import PickTime from './components/PickTime';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Availability from './components/Availability';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Calendar/> */}
      {/* <MyCalendar/> */}
      {/* <Meeting /> */}
      {/* <UserDetails /> */}
      {/* <PickTime/> */}
      
      <Route path="/Login" component={Login}/>
      {/* <Route path="/Availability" component={Availability}/> */}
      <Route path="/Meeting" component={Meeting}/>
      <Route path="/UserDetails" component={UserDetails}/>
      <Route path="/PickTime" component={PickTime}/>
      <Route path="/Header" component={Header}/>
      <Route path="/Home" component={Home}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
