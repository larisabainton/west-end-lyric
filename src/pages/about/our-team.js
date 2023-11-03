import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


import Layout from '../../components/layout';

const OurTeamPage = () => {
    const teamData = useStaticQuery(graphql`
    query TeamPageQuery {
        allContentfulTeamMember {
          nodes {
              jobTitle
              orderNumber
              pronouns
              teamMemberName
              teamMemberPhoto {
                gatsbyImageData
              }
              bio {
                raw
            }
          }
        }
      }
    `)

    // get teamMembers sorted by orderNumber
    const teamMembers = teamData.allContentfulTeamMember.nodes.sort((node1, node2) => node1.orderNumber - node2.orderNumber);

    console.log(teamMembers);
    
    return(
        <Layout>
            <main>
                <div className="our-team">
                    <div className="section-title">Our Team</div>
                    <ul className="teamMembers-list">
                    {teamMembers.map(({ teamMemberName, jobTitle, teamMemberPhoto, bio}) => {
                        return (
                            <li className="teamMembers-list-item" key={teamMemberName}>
                                <div className="teamMembers-list-item_info">
                                    <GatsbyImage className="teamMembers-list-item_photo" image={getImage(teamMemberPhoto)} alt={`${teamMemberName} Headshot`}/>
                                    <div className="teamMembers-list-item_name">{teamMemberName}</div>
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