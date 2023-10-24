import React from 'react';

/* 
 
interface eventList = Array[{
    date: number,
    month: string,
    year: number,
    time: string,
    location: string,
    title: string,
    ticketsLink: string
}]

*/


const getTickets = ticketsLink => {
    if (ticketsLink) {
        return (
            <div className="eventList_event--tickets">
                <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
            </div>
        )
    }
}

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
                    {this.eventList.map(({ date, month, year, time, location, title, ticketsLink }, i) => (
                        <li className="eventList_event" key={`${title} - ${i}`}>
                            <div className="eventList_event_top-row">
                                <div className="eventList_event--date-container">
                                    <div className="eventList_event--date">{month} {date}</div>
                                    <div className="eventList_event--year">{year}</div> 
                                </div>
                                <div className="eventList_event--time">{time}</div>
                                <div className="eventList_event--title">{title}</div>
                                
                                <div className="eventList_event--location">{location}</div>
                            </div>
                            <div className="eventList_event_bottom-row">
                                {getTickets(ticketsLink)}
                            </div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>);
    }
}

export default Events;