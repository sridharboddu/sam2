import React,{useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    let[list,setList]=useState(
        [
            {
                id: 0,
               title: 'All Day Event very long title',
               allDay: true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
            }
        ]
    )
 return(
     <div>
 <div style={{height: 500,marginLeft:"64px",marginRight:"64px",}} >
    <Calendar
      localizer={localizer}
      events={list}
      startAccessor="start"
      endAccessor="end"
      style={{height: 300}}
    />
  </div>
  </div>
);
}
export default MyCalendar;
