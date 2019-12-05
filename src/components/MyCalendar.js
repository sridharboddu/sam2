import React,{useState,Children} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import {
  
  withRouter,
  
} from 'react-router-dom';

import 'react-big-calendar/lib/css/react-big-calendar.css';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
const localizer = momentLocalizer(moment);


// const CURRENT_DATE = moment().toDate();
// let testHandler=(e)=>
// {
//   alert(e)
// }
// const ColoredDateCellWrapper = ({children, value}) =>
// alert(value) 

	// React.cloneElement(Children.only(children), {

		// style: {
		// 	...children.style,
    // value: value < CURRENT_DATE ? "disabled ": "",
      
    // },
    // alert(value)
	// });

const MyCalendar =( props) => {
  // let [date,setdate]=useState("");
  
    let testHandler=(date)=>{
   
// var test=date.substring(1,3);
  // alert(test)
      let today=new Date()
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var hours=today.getHours(); // => 9var min=today.getMinutes();
      today= yyyy + '-' + mm + '-' + dd;
     
      var dd1 = String(date.getDate()).padStart(2, '0');
      var mm1 = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy1 = date.getFullYear();
      var hours=date.getHours(); // => 9var min=today.getMinutes();
     var today1= yyyy1 + '-' + mm1 + '-' + dd1;
      
      //alert(today1+today)
      if(today1>=today){
        props.history.push("/PickTime");
      }
      else{
        alert("Please Add Valid Date")
        window.location.reload();
        props.history.push("/Meeting");
        
       
      }
      // alert(date);
    
    }
    
    
    
 const DateCell = ({
 value,
 children,
}) => {

 const now = new Date();
 now.setHours(0,0,0,0);
 

 return (
  <div  class= { value< now ? "date-in-past" : "" } >
   {
    children
   }
  </div>
 )
 
}

 return(
     <div>
 <div style={{height: 300,marginLeft:"64px",marginRight:"64px",}} >
    <Calendar
      
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      drilldownView="date"
     
      
      
      // views={['month', 'agenda']}
      // onNavigate={(events)=>testHandler(events.end)}
        onNavigate={(date, view) =>{
          console.log(date) 
          testHandler(date)
       
        }}
      // }
      // onSelectEvent={event => alert(event.title)}
      // onSelectSlot={(slotInfo) => alert(
      //   `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
      //   `\nend: ${slotInfo.end.toLocaleString()}` +
      //   `\naction: ${slotInfo.action}`
      //   )}
      components={{
        dateCellWrapper: DateCell,
        
       }}
      //     onNavigate={date => {
      //       testHandler({ selectedDate: date });
      // }}
      // onSelecting={testHandler}
      // onSelectSlot={testHandler}
      // onDoubleClickEvent={testHandler}
      // style={{height: 300}}
    />
    
     

  </div>
  </div>
);
}
export default withRouter(MyCalendar) ;
