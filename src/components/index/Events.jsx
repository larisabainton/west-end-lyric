import { Link } from 'gatsby';
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import TicketsButton from '../ticketsButton';
import getPathForProduction from '../../functions/getPathForProduction';

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
        return <TicketsButton ticketsLink={ticketsLink}/>
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

const getHiddenSection = (production, linkPath) => {
    if (!production || !production.shortDescription) {
        return;
    }

    return (
        <div className="eventList_event--hidden">
            <div className="eventList_event_description">
                {renderRichText(production.shortDescription)}
            </div>
            <Link className="eventList_event_link" to={linkPath}>Learn More</Link>
        </div>
    )
}

const Events = ({events, pages}) => {
    events.sort((node1, node2) => new Date(node1.eventDate) - new Date(node2.eventDate));

    return (
        <div className="events" id="events">
            <div className="events_title">Upcoming Performances</div>
            <ul className="events_eventList">
                {events
                // filter out events that have passed
                .filter(({ eventDate }) => (new Date(eventDate).getTime() - new Date().getTime() > 0))
                .map(({ production: productions, eventDate, venue, eventTitle, ticketsLink }, i) => {
                    const production = productions[0];
                    const linkPath = getPathForProduction(production.id, pages);


                    return (
                    <li className="eventList_event" key={`${eventTitle} - ${i}`}>
                        <div className="eventList_event--displayed">
                            {getDate(eventDate)}
                            <div className="eventList_event--title">
                                <Link to={linkPath}>{eventTitle}</Link>
                            </div>
                            {showTicketsOrVenue(ticketsLink, venue)}
                        </div>
                        {getHiddenSection(production, linkPath)}
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Events;