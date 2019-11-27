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

    let testHandler=()=>{
      // alert(date);
      props.history.push("/PickTime");
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
      // views={['month', 'agenda']}
      // onNavigate={(events)=>testHandler(events.end)}
      //   onNavigate={(date, view) =>{
      //     console.log(date) 
      //     testHandler(date)
       
      //   }

      // }
      components={{
        dateCellWrapper: DateCell,
        
       }}
          onNavigate={date => {
            testHandler({ selectedDate: date });
      }}
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
