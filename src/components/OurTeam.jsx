import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getTeamMemberFormat = (teamMembers, imageSharpNodes) => { 
    return teamMembers.map(({ name, jobTitle, headshot})=> {
        // match the team member to the correct image node
        const imageNode = imageSharpNodes.find(n => n.childImageSharp.gatsbyImageData.images.fallback.src.includes(headshot));
        const image = getImage(imageNode);
        return <div className="ourTeam_teamMember" key={name}>
            <GatsbyImage image={image}  className="teamMember_headshot" alt="headshot"/>
            <div className="teamMember_information">
                <div className = "teamMember_name">{name}</div>
                <div className = "teamMember_jobTitle">{jobTitle}</div>
            </div>
        </div>
    });
}


/* 

interface teamMembers = Array[{
    name: string,
    jobTitle: string,
    headshot: string (url),
}]

*/
const OurTeam = ({teamMembers}) => {
    const data = useStaticQuery(graphql`
        query Headshots {
            allFile(filter: {sourceInstanceName: {eq: "headshots"}}) {
                edges {
                    node {
                      id
                      childImageSharp {
                        id
                        gatsbyImageData
                      }
                    }
                }
            }
        }
    `);

    const imageSharpNodes = data.allFile.edges.map(edge => edge.node);

    return (
        <div className="ourTeam">
            <div className="ourTeam_title">Our Team</div>
            <div className="ourTeam_paragraph">Meet the women behind West End Lyric</div>
            <div className="ourTeam_teamMembers">
                {getTeamMemberFormat(teamMembers, imageSharpNodes)}
            </div>
        </div>
    );

}

export default OurTeam;