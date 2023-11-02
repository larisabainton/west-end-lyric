import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql, useStaticQuery } from 'gatsby';

const Sponsors = () => {
    const sponsorData = useStaticQuery(graphql`
        query SponsorQuery {
            allContentfulSponsor {
                nodes {
                  logoImage {
                    gatsbyImageData
                  }
                  name
                  shortDescription {
                    raw
                  }
                }
              }
        }
    `)

    const sponsors = sponsorData.allContentfulSponsor.nodes;

    return (
        <div className="sponsors">
            <div className="sponsors-text">
                <div className="sponsors-text_title">Sponsors</div>
                <div className="sponsors_list">
                    {sponsors.map(({ logoImage, name, shortDescription }) => {
                        const image = getImage(logoImage);
                        return (
                            <li className="sponsors_list-item" key={name}>
                                <GatsbyImage image={image} className="sponsors-photo" alt="sponsor logo" />
                                <div className="sponsors-name">{name}</div>
                                <div className="sponsors-description">{renderRichText(shortDescription)}</div>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sponsors;