import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getTeamMemberFormat = (teamMembers) => { 
    return teamMembers.map(({ name, team_member, headshot })=> {
        const image = getImage(headshot);
        const jobTitle = team_member[0].jobTitle;

        return <div className="ourTeam_teamMember" key={name}>
            <GatsbyImage image={image}  className="teamMember_headshot" alt="headshot"/>
            <div className="teamMember_information">
                <div className = "teamMember_name">{name}</div>
                <div className = "teamMember_jobTitle">{jobTitle}</div>
            </div>
        </div>
    });
}

const OurTeam = () => {
    const teamData = useStaticQuery(graphql`
    query TeamDataQuery {
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
              headshot {
                gatsbyImageData
              }
            }
          }
      }
    `)

    const teamMembers = teamData.allContentfulPersonnel.nodes;
    console.log(teamMembers)

    return (
        <div className="ourTeam">
            <div className="ourTeam_title">Our Team</div>
            <div className="ourTeam_paragraph">Meet the women behind West End Lyric</div>
            <div className="ourTeam_teamMembers">
                {getTeamMemberFormat(teamMembers)}
            </div>
        </div>
    );

}

export default OurTeam;