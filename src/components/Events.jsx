import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const getDate = eventDate => {
    const date = new Date(eventDate);

    const dateOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }

    const timeOptions = {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    }
    return (
        <div className="eventList_event--date-container">
            <div className="eventList_event--date">{date.toLocaleDateString("en-US", dateOptions)}</div>
            <div className="eventList_event--time">{date.toLocaleTimeString("en-US", timeOptions)}</div> 
        </div>
        
    )
    
}

const getTickets = ticketsLink => {
    if (ticketsLink) {
        return (
            <div className="eventList_event--tickets">
                <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
            </div>
        )
    }
}

const showTicketsOrVenue = (ticketsLink, venue) => {
    if (ticketsLink) {
        return getTickets(ticketsLink)
    } else {
        return (
        <div className="eventList_event--location">
            <a href={venue.website} target="_blank" rel="noreferrer">{venue.name}</a>
        </div>)
    }
}

const Events = () => {
    const eventData = useStaticQuery(graphql`
        query EventDataQuery {
            allContentfulEvent {
                nodes {
                    ticketsLink
                    eventTitle
                    eventDate
                    venue {
                        name
                        website
                    }
                }
            }
        }
    `)

    const eventList = eventData.allContentfulEvent.nodes
        /* sort events by date */
        .sort((node1, node2) => new Date(node1.eventDate) - new Date(node2.eventDate));

    return (<div>
        <div className="events" id="events">
            <div className="events_title">Upcoming Performances</div>
            <ul className="events_eventList">
                {eventList.map(({ eventDate, venue, eventTitle, ticketsLink }, i) => (
                    <li className="eventList_event" key={`${eventTitle} - ${i}`}>
                        {getDate(eventDate)}
                        <div className="eventList_event--title">{eventTitle}</div>
                        {showTicketsOrVenue(ticketsLink, venue)}
                    </li>
                ))}
            </ul>
        </div>
    </div>);
}

export default Events;