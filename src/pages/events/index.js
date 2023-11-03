import React from "react";

import Layout from "../../components/layout.jsx";
import { graphql, useStaticQuery } from "gatsby";

const getCast = roles => {
    if (roles) {
        roles = roles && roles.sort((role1, role2) => role1.orderNumber - role2.orderNumber);
        
        return (
            <div className="cast-list">Cast List
                {roles.map(({ castMember: castMembers, roleName }) => {
                    return castMembers.map(castMember => {
                        return (
                            <div className="cast-list_item" key={roleName}>
                                <div className="cast-list_role-name">{roleName}</div>
                                <div className="cast-list_cast-name">{castMember.name}</div>
                            </div>
                        )
                    })
                    
                })}
            </div>
        )
    }
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
        <div className="event_date-container">
            <div className="event_date">{date.toLocaleDateString("en-US", dateOptions)}</div>
            <div className="event_time">{date.toLocaleTimeString("en-US", timeOptions)}</div> 
        </div>
        
    )
    
}

const getTickets = ticketsLink => {
    if (ticketsLink) {
        return (
            <div className="event_tickets">
                <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
            </div>
        )
    }
}

const EventsPage = () => {
    const eventData = useStaticQuery(graphql`
    query EventPageQuery {
        allContentfulEvent {
          nodes {
            eventTitle
            eventDate
            ticketsLink
            longDescription {
                raw
            }
            shortDescription {
                raw
            }
            venue {
              name
              website
            }
            role {
                roleName
                castMember {
                  ... on ContentfulPersonnel {
                    name
                  }
                  ... on ContentfulTeamMember {
                    name
                  }
                }
              }
          }
        }
      }
    `)

    const eventList = eventData.allContentfulEvent.nodes
        /* sort events by date */
        .sort((node1, node2) => new Date(node1.eventDate) - new Date(node2.eventDate));
    
    return (
        <Layout>
            <main>
                <div className="events-page">
                    <div className="events-page_title">Upcoming Events</div>
                    <ul className="events-page_eventlist">
                        {eventList.map(({ eventDate, venue, eventTitle, ticketsLink, role }, i) => (
                            <li className="event" key={`${eventTitle} - ${i}`}>
                                {getDate(eventDate)}
                                <div className="event_title">{eventTitle}</div>
                                <div className="event_location">
                                    <a href={venue.website} target="_blank" rel="noreferrer">{venue.name}</a>
                                </div>
                                {getTickets(ticketsLink)}
                                {getCast(role)}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default EventsPage;

export const Head = () => <title>West End Lyric | Events</title>