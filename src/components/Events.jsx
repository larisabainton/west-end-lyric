import React from 'react';

/* 
 
interface eventList = Array[{
    date: number,
    month: string,
    year: number,
    time: string,
    location: string,
    title: string,
}]

*/

class Events extends React.Component {
    constructor({
        eventList
    }) {
        super();
        this.eventList = eventList;

    }
    
    render() {
        return (<div>
            <div className="events" id="events">
                <div className="events_title">Upcoming Performances</div>
                <ul className="events_eventList">
                    {this.eventList.map(({ date, month, year, time, location, title }) => (
                        <li className="eventList_event" key={title}>
                            <div className = "eventList_event--date-and-title">
                                <div className="eventList_event--date-container">
                                    <div className="eventList_event--date">{month} {date}</div>
                                    <div className="eventList_event--year">{year}</div> 
                                </div>
                                {/* <div className="eventList_event--time">{time}</div> */}
                                <div className="eventList_event--title">{title}</div>
                            </div>
                            <div className="eventList_event--location">{location}</div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>);
    }
}

export default Events;