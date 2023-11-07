import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from "../../components/layout.jsx";
import CastList from "../../components/events/CastList";
import EventDates from "../../components/events/EventDates.jsx";

const getCoverPhoto = productionPhoto => {
    return productionPhoto && <GatsbyImage className="production_cover-photo" image= {getImage(productionPhoto)} alt=""/>
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
                    headshot {
                        gatsbyImageData
                    }
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
                      name
                      headshot {
                        gatsbyImageData
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
                    <ul className="events-page_production-list"> 
                        {productionList.map(({ events, longDescription, name, productionPhoto, staff}, i) => {

                            events.sort((event1, event2) => {
                                return new Date(event1.eventDate) - new Date(event2.eventDate)
                            });

                            return (
                                <li className="production" key={`production-${i}`}>
                                    {getCoverPhoto(productionPhoto)}
                                    <div className="production_title">{name}</div>
                                    <EventDates events={events} />
                                    <div className="production_navigation">
                                        <Link to="#production_about">About</Link>
                                        <Link to="#production_artists">Artists</Link>
                                        <Link to="#production_venues">Venue</Link>
                                    </div>
                                    <div className="production_about" id="production_about">
                                        {longDescription && renderRichText(longDescription)}
                                    </div>
                                    <CastList events={events} staff={staff}/>
                                    <div className="production_venues" id="production_venues"></div>
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