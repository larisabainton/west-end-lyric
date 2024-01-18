import React from "react";
import TicketsButton from "../ticketsButton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import HTMLFlipBook from "react-pageflip";

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

const createDatesSection = (events) => {
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
}

const createProgram = (programPages) => {
    return (
        <div className="program">
             <div className="program-title section-title">Program</div>
             <HTMLFlipBook 
                width={400} 
                height={600} 
                showCover={true}
                className="program-book"
            >
                {programPages
                    .sort((page1, page2) => parseInt(page1.filename) - parseInt(page2.filename))
                    .map((page, i) => {
                        return <div key={`program-pages-${i}`}><GatsbyImage image={getImage(page.gatsbyImageData)} alt={`program page ${i}`} /></div>
                    })
                }
            </HTMLFlipBook>
        </div>
       
    )
}

const EventDates = ({ events, programPages }) => {
    
    if (!events.length) {
        return;
    }

    const isPastEvent = events.every(({ eventDate }) => (new Date(eventDate).getTime() - new Date().getTime()) < 0)

    if (isPastEvent) {
        if (programPages) {
            return createProgram(programPages)
        }
    } else if (!isPastEvent) {
        return createDatesSection(events);
    }
    
    
};

export default EventDates;