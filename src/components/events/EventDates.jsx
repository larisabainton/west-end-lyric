import React from "react";

const getTickets = ticketsLink => {
    if (ticketsLink) {
        return (
        <div className="event_tickets">
            <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
        </div>
        )
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

const EventDates = (events) => {
    
    if (!events.length) {
        return;
    }
    
    return (
        <div className="production_dates">
            {events.map(({ eventDate, ticketsLink }, i) => {
                return (
                    <div className="event_date">
                        {getDate(eventDate)}
                        {getTickets(ticketsLink)}
                    </div>
                )
            })}
        </div>
    )
};

export default EventDates;