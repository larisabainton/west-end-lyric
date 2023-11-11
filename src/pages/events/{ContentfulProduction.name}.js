import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from "../../components/layout.jsx";
import CastList from "../../components/events/CastList";
import EventDates from "../../components/events/EventDates.jsx";
import Navigation from "../../components/events/Navigation.jsx";

const getCoverPhoto = productionPhoto => {
    return productionPhoto && <GatsbyImage className="production_cover-photo" image= {getImage(productionPhoto)} alt=""/>
}

const Production = ({ data }) => {
    const production = data.contentfulProduction;
    const pages = data.allSitePage.edges;

    const { events, longDescription, name, productionPhoto, staff } = production;

    return (
    <Layout>
        <main className="production-page">
            {getCoverPhoto(productionPhoto)}
            <div className="production_title">{name}</div>
            <EventDates events={events} />
            <Navigation ticketsLink ={events[0].ticketsLink} />
            <div className="production_about" id="production_about">
                {longDescription && renderRichText(longDescription)}
            </div>
            <CastList pages={pages} events={events} staff={staff}/>
            <div className="production_venues" id="production_venues"></div>
        </main>
    </Layout>)
}

export default Production;

export const Head = ({ data }) => <title>{`West End Lyric | ${data.contentfulProduction.name}`}</title>

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
        allSitePage(filter: {path: {regex: "/personnel/"}}) {
            edges {
              node {
                path
                pageContext
              }
            }
          }
    }
`