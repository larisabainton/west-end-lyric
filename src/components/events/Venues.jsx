import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

// only list date if there are multiple venues
const listDate = (oneVenue, eventDate) => {
    if (!oneVenue) {
        return <div>{new Date(eventDate).toLocaleDateString("en-US", { month: 'short', day: 'numeric'})}</div>
    }
}

const Venues = ({ events }) => {
    const oneVenue = events.every(({ venue }) => venue.name === events[0].venue.name)

    return (
        <div className="production_venues" id="production_venues">
            <div className="production_venues_title section-title">{ oneVenue ? "Venue" : "Venues" }</div>
            <ul className="production_venues_list">
                {events.sort((event1,event2) => new Date(event1.eventDate) - new Date(event2.eventDate))
                        .map(({ venue, eventDate }, i) => {
                    const { name, address, website, photo } = venue;
                    
                    return (
                        <li className="production_venues_list-item" key={`production-venue-${i}`}>
                            <GatsbyImage className="venue_image" image={getImage(photo)} alt={`${name} image`}/>
                            <a className="production_venue-name" href={website}>{name}</a>
                            <div className="production_venue-address">{address}</div>
                            {listDate(oneVenue, eventDate)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Venues;