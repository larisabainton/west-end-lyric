import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from "../../components/layout.jsx";

const getStaff = staffArray => {
    if (staffArray && staffArray.length) {
        return staffArray.map(staff => {
            const name = staff.fields.person.en_US.fields.name.en_US;
            const title = staff.fields.title.en_US;
            console.log(name, title)
        })



        return (
            <div className="staff-list">
            </div>
        )
    }
}

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

const EventsPage = () => {
    const eventData = useStaticQuery(graphql`
    query EventPageQuery {
        allContentfulEvent(sort: {eventDate: ASC}) {
            nodes {
              production {
                name
                longDescription {
                  raw
                }
                shortDescription {
                  raw
                }
                staff {
                  fields {
                    person {
                      en_US {
                        fields {
                          name {
                            en_US
                          }
                        }
                      }
                    }
                    title {
                      en_US
                    }
                  }
                }
                productionPhoto {
                  gatsbyImageData
                  title
                }
              }
              eventDate
              ticketsLink
              venue {
                name
                website
              }
              roles {
                castMember {
                  ... on ContentfulPersonnel {
                    name
                  }
                }
                roleName
              }
            }
          }
    }`)

    const eventList = eventData.allContentfulEvent.nodes
    
    return (
        <Layout>
            <main>
                <div className="events-page">
                    <div className="section-title">Upcoming Events</div>
                    <ul className="events-page_eventlist"> 
                        {eventList.map(({ eventDate, production, roles, ticketsLink, venue }, i) => {
                            if (!production) {
                                return (<li key={i}></li>)
                            }

                            const { shortDescription, longDescription, name, productionPhoto, staff } = production[0];

                            return (
                                <li className="event" key={`${name} - ${i}`}>
                                    {getCoverPhoto(productionPhoto)}
                                    <div className="event_title">{name}</div>
                                    {getDate(eventDate)}
                                    <div className="event_location">
                                        <a href={venue.website} target="_blank" rel="noreferrer">{venue.name}</a>
                                    </div>
                                    {getEventDescription(longDescription, shortDescription)}
                                    {getTickets(ticketsLink)}
                                    {getStaff(staff)}
                                    {getCast(roles)}
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