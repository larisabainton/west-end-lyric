import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from "../../components/layout.jsx";
import CastList from "../../components/events/CastList";
import EventDates from "../../components/events/EventDates.jsx";

const getCoverPhoto = productionPhoto => {
    return productionPhoto && <GatsbyImage className="production_cover-photo" image= {getImage(productionPhoto)} alt=""/>
}

const Production = ({ data }) => {
    const production = data.contentfulProduction;

    const { events, longDescription, name, productionPhoto, staff } = production;

    return (
    <Layout>
        <main>
        <div className="production-page">
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
               
        </div>
        </main>
    </Layout>)
}

export default Production;

export const query = graphql`
    query ($id: String!) {
        contentfulProduction(id: {eq: $id}) {
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
`