import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


import Layout from '../../components/layout';

const OurTeamPage = () => {
    const teamData = useStaticQuery(graphql`
    query TeamPageQuery {
        allContentfulPersonnel(
            filter: {team_member: {elemMatch: {orderNumber: {ne: null}}}}
            sort: {team_member: {orderNumber: ASC}}
        ) {
            nodes {
              team_member {
                jobTitle
                orderNumber
              }
              name
              bio {
                raw
              }
              headshot {
                gatsbyImageData
              }
            }
          }
      }
    `)

    // get teamMembers sorted by orderNumber
    const teamMembers = teamData.allContentfulPersonnel.nodes;
    console.log(teamMembers);
    
    return(
        <Layout>
            <main>
                <div className="our-team">
                    <div className="section-title">Our Team</div>
                    <ul className="teamMembers-list">
                    {teamMembers.map(({ name, team_member, headshot, bio}) => {
                        const jobTitle = team_member[0].jobTitle;

                        return (
                            <li className="teamMembers-list-item" key={name}>
                                <div className="teamMembers-list-item_info">
                                    <GatsbyImage className="teamMembers-list-item_photo" image={getImage(headshot)} alt={`${name} Headshot`}/>
                                    <div className="teamMembers-list-item_name">{name}</div>
                                    <div className="teamMembers-list-item_job">{jobTitle}</div>
                                </div>
                                <div className="teamMembers-list-item_bio">{renderRichText(bio)}</div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default OurTeamPage;

export const Head = () => <title>West End Lyric | Our Team</title>