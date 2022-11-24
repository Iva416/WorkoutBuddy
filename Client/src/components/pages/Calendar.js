import {useState} from 'react';
import Calendar from 'react-calendar';
import '';
import Time from './Time.js'

function App() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

 return (
 <div className='app'>
   <h1 className='header'>React Calendar</h1>
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>


// import React from 'react';
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react-lite';

// function Calendar() {

//     const [events, setEvents] = React.useState([]);
    
//     const onPageLoading = React.useCallback((event, inst) => {
//         const year = event.month.getFullYear();
//         const month = event.month.getMonth();

//         getJson('https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5', (data) => {
//             const newEvents = [];
            
//             for (const value of data) {
//                 newEvents.push({
//                     start: value.start,
//                     end: value.end || '',
//                     allDay: value.allDay,
//                     title: value.title,
//                     color: value.color
//                 });
//             }

//             setEvents(newEvents);
            
//             toast({                message: 'New events loaded'
//             });

//         }, 'jsonp');
//     }, []);

//     const view = React.useMemo(() => {
//         return {
//            calendar: { popover: true, count: true }
//         };
//     }, []);

//     return (
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={false}
//             dragToCreate={false}
//             dragToMove={false}
//             dragToResize={false}
//             eventDelete={false}
//             data={events}
//             view={view}
//             onPageLoading={onPageLoading}
//        />
//     ); 
// }    

// // export default Calendar
// --------------------------------------------
// import React, {Component} from 'react';

// // DayPilot Pro
// import {DayPilotCalendar} from "@daypilot/daypilot-lite-react";

// class Calendar extends Component {

//   constructor(props) {
//     super(props);
//     this.calendarRef = React.createRef();
//   }

//   get calendar() {
//     return this.calendarRef.current.control;
//   }

//   render() {
//     return (
//       <DayPilotCalendar
//         viewType={"Week"}
//         onTimeRangeSelected={args => {
//           this.calendar.message("Selected range: " + args.start.toString("hh:mm tt") + " - " + args.end.toString("hh:mm tt"));
//         }}
//         ref={this.calendarRef}
//       />
//     );
//   }
// }

// export default Calendar;
