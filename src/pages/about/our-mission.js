import React from "react";

import Layout from '../../components/layout';
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const OurMissionPage = () => {
    const missionData = useStaticQuery(graphql`
        query MissionPageQuery {
            contentfulDescription(name: {eq: "Mission Statement"}) {
                shortDescription {
                  raw
                }
                longDescription {
                    raw
                }
              }
        }
    `)

    const { shortDescription, longDescription } = missionData.contentfulDescription;
    
    return (
        <Layout>
            <main>
                <div className="our-mission">
                    <div className="section-subtitle">Our Mission</div>
                    {renderRichText(shortDescription)}
                    <div className="section-subtitle">Our Core Values</div>
                    {renderRichText(longDescription)}
                </div>
            </main>
        </Layout>
    )
}

export default OurMissionPage;

export const Head = () => <title>West End Lyric | Our Mission</title>