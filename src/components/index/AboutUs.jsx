import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

const heading = "Our Story";
const title = "Get to Know Us";

const AboutUs = () => {
    const missionStatementData = useStaticQuery(graphql`
        query MissionStatementQuery {
            contentfulDescription(name: {eq: "Mission Statement"}) {
                shortDescription {
                  raw
                }
              }
        }
    `)

    const text = missionStatementData.contentfulDescription.shortDescription;
    
    return (
        <div className="aboutUs" id="aboutUs">
            <div className="aboutUs_left">
                {heading}
            </div>
            <div className="aboutUs_right">
                <div className="aboutUs_right-title">{title}</div>
                <div className="aboutUs_right-text">{renderRichText(text)}</div>
            </div>
        </div>
    );
} 

export default AboutUs;