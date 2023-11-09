import { Link } from 'gatsby';
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const getLink = (productionId, pages) => {
    const matchingPage = pages.find(page => page.node.pageContext && page.node.pageContext.id === productionId);

    return matchingPage.node.path;
}

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

const getDescription = production => {
    if (production && production.shortDescription) {
        return (
        <div className="eventList_event_description">
            {renderRichText(production.shortDescription)}
        </div>)
    }
}

const Events = ({events, pages}) => {
    events.sort((node1, node2) => new Date(node1.eventDate) - new Date(node2.eventDate));

    return (
        <div className="events" id="events">
            <div className="events_title">Upcoming Performances</div>
            <ul className="events_eventList">
                {events.map(({ production: productions, eventDate, venue, eventTitle, ticketsLink }, i) => (
                    <li className="eventList_event" key={`${eventTitle} - ${i}`}>
                        <div className="eventList_event--displayed">
                            {getDate(eventDate)}
                            <div className="eventList_event--title">{eventTitle}</div>
                            {showTicketsOrVenue(ticketsLink, venue)}
                        </div>
                        <div className="eventList_event--hidden">
                            {getDescription(productions[0])}
                            <Link className="eventList_event_link" to={getLink(productions[0].id, pages)}>Learn More</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Events;