import React from "react";
import TicketsButton from "../ticketsButton";

const getTickets = ticketsLink => {
    if (ticketsLink) {
        return <TicketsButton ticketsLink={ticketsLink} />
    }
}

const getDate = eventDate => {
    const date = new Date(eventDate);

    const dateOptions = {
        month: 'short',
        day: 'numeric',
    }

    const timeOptions = {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    }
    return (
        <div className="event_date-container">
            <div className="event_date">{date.toLocaleDateString("en-US", dateOptions)} at {date.toLocaleTimeString("en-US", timeOptions)}</div>
        </div>
        
    )
    
}

const EventDates = ({ events }) => {
    
    if (!events.length) {
        return;
    }
    
    return (
        <div className="production_dates">
            {events
            .sort((node1, node2) => new Date(node1.eventDate) - new Date(node2.eventDate))
            .map(({ eventDate, ticketsLink }, i) => {
                return (
                    <div className="event_date" key={`event_date-${i}`}>
                        {getDate(eventDate)}
                        {getTickets(ticketsLink)}
                    </div>
                )
            })}
        </div>
    )
};

export default EventDates;