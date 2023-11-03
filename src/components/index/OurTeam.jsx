import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getTeamMemberFormat = (teamMembers) => { 
    return teamMembers.map(({ name, jobTitle, teamMemberPhoto })=> {
        const image = getImage(teamMemberPhoto);
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
        allContentfulTeamMember {
          nodes {
              jobTitle
              orderNumber
              name
              teamMemberPhoto {
                gatsbyImageData
              }
          }
        }
      }
    `)

    const teamMembers = teamData.allContentfulTeamMember.nodes.sort((node1, node2) => node1.orderNumber - node2.orderNumber);

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