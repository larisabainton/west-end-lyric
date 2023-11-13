import React from 'react';
import '../style/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';

const OurSponsorsPage = ({ data }) => {
    const sponsors = data.allContentfulSponsor.nodes;
    
    return(
        <Layout>
            <main>
            <div className="our-sponsors">
                <div className="section-title">Sponsors</div>
                <div className="our-sponsors_list">
                    {sponsors.map(({ logoImage, name, shortDescription, longDescription }) => {
                        const image = getImage(logoImage);
                        const description = longDescription ? longDescription : shortDescription;
                        return (
                            <li className="sponsors_list-item" key={name}>
                                <GatsbyImage image={image} className="sponsors-photo" alt="sponsor logo" />
                                <div className="sponsors-name">{name}</div>
                                <div className="sponsors-description">{renderRichText(description)}</div>
                            </li>
                        )
                    })}
                </div>
            </div>
            </main>
        </Layout>
    )
}

export default OurSponsorsPage;

export const Head = () => <title>West End Lyric | Our Sponsors</title>

export const query = graphql`
    query SponsorPageQuery {
        allContentfulSponsor {
            nodes {
            logoImage {
                gatsbyImageData
            }
            name
            shortDescription {
                raw
            }
            longDescription {
                raw
            }
            }
        }
    }
`