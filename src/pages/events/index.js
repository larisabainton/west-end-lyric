import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from "../../components/layout.jsx";

const getStaff = staffArray => {
    if (staffArray && staffArray.length) {
        return (
            <div className="staff-info">
                <div className="staff-info_name">Direction</div>
                <ul>
                {staffArray.map((staff, i) => {
                    const name = staff.personnel.name;
                    const title = staff.title;
                    return (
                        <li className="staff-member_info" key={i}>
                            <div className="staff-member_title">{title}</div>
                            <div className="staff-member_name">{name}</div>
                        </li>
                )})}
                </ul>
            </div>
        )
        }
    }

const getCast = roles => {
    if (roles) {
        roles = roles && roles.sort((role1, role2) => role1.orderNumber - role2.orderNumber);
        
        return (
            <ul className="cast-list">Cast List
                {roles.map(({ castMember, roleName }) => {
                    return (
                        <li className="cast-list_item" key={roleName}>
                            <div className="cast-list_role-name">{roleName}</div>
                            <div className="cast-list_cast-name">{castMember.name}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
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

const getEventDescription = (longDescription, shortDescription) => {
    let text = '';

    if (longDescription) {
        text = renderRichText(longDescription)
    } else if (shortDescription) {
        text = renderRichText(shortDescription)
    }
    
    return <div className="event_description">{text}</div>
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

const getCoverPhoto = productionPhoto => {
    return productionPhoto && <GatsbyImage image= {getImage(productionPhoto)} alt=""/>
}

const isMulticast = events => {
    const castLists = events.map(event => event.roles);
    
    let doubleCast = false;
    
    castLists[0] && castLists[0].forEach(({ roleName, castMember }) => {
        for (let i = 1; i < castLists.length; i++) {
            const currentEntry = castLists[i].find(castMember => castMember.roleName === roleName);

            // If the entry is not found or if the names are different, set the variable as true
            if ((!currentEntry || !currentEntry.castMember)|| currentEntry.castMember.name !== castMember.name) {
                doubleCast= true;
            }
        }
    })

    return doubleCast;
}

const getEventInfo = (events, multipleCastLists) => {
    return events.map((event, i) => {
        const {eventDate, venue, ticketsLink, roles} = event;

        // if multiple cast lists, create cast list for each event
        const castList = multipleCastLists && getCast(roles);
        
        return (
        <div className="event_info" key={i}>
            {getDate(eventDate)} 
            <div className="event_location">
                <a href={venue.website} target="_blank" rel="noreferrer">{venue.name}</a>
            </div> 
            {getTickets(ticketsLink)}
            {castList}
        </div>
        )})
}
        
const EventsPage = () => {
    const eventData = useStaticQuery(graphql`
    query EventPageQuery {
        allContentfulProduction(
            sort: {events: {eventDate: ASC}}
          ) {
            nodes {
              name
              productionPhoto {
                gatsbyImageData
              }
              longDescription {
                raw
              }
              shortDescription {
                raw
              }
              staff {
                title
                personnel {
                    name
                }
              }
              events {
                eventDate
                ticketsLink
                venue {
                  name
                  website
                }
                roles {
                  roleName
                  castMember {
                    ... on ContentfulPersonnel {
                      name
                    }
                  }
                }
                
              }
            }
          }
    }`)

    const productionList = eventData.allContentfulProduction.nodes;
    
    return (
        <Layout>
            <main>
                <div className="events-page">
                    <div className="section-title">Upcoming Events</div>
                    <ul className="events-page_production-list"> 
                        {productionList.map(({ events, longDescription, name, productionPhoto, shortDescription, staff}, i) => {

                            if (!events) {
                                return <li key={i}></li>
                            }

                            events.sort((event1, event2) => {
                                return new Date(event1.eventDate) - new Date(event2.eventDate)
                            });
                            
                            const multipleCastLists = isMulticast(events);
                            let roles = null;
                            
                            // if only one cast, create cast list with cast from first event 
                            if (!multipleCastLists) {
                                roles = getCast(events[0].roles)
                            }

                            return (
                                <li className="production" key={i}>
                                    {getCoverPhoto(productionPhoto)}
                                    <div className="production_title">{name}</div>
                                    {getEventDescription(longDescription, shortDescription)}
                                    {getStaff(staff)}
                                    <ul>{getEventInfo(events, multipleCastLists)}</ul>
                                    {roles}
                                </li>
                        )})}
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default EventsPage;

export const Head = () => <title>West End Lyric | Events</title>