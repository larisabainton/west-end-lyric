import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import getPathForPersonnel from "../../functions/getPathForPersonnel";

const getTeamMemberFormat = (teamMembers, pages) => { 
    return teamMembers.map(({ name, team_member, headshot })=> {
        const image = getImage(headshot);
        const jobTitle = team_member[0].jobTitle;

        return <div className="ourTeam_teamMember" key={name}>
            <GatsbyImage image={image}  className="teamMember_headshot" alt="headshot"/>
            <div className="teamMember_information">
                <Link to={getPathForPersonnel(name, pages)} className = "teamMember_name">{name}</Link>
                <div className = "teamMember_jobTitle">{jobTitle}</div>
            </div>
        </div>
    });
}

const OurTeam = ({ pages, teamMembers }) => {
    return (
        <div className="ourTeam">
            <div className="ourTeam_title">Our Team</div>
            <div className="ourTeam_paragraph">Meet the women behind West End Lyric</div>
            <div className="ourTeam_teamMembers">
                {getTeamMemberFormat(teamMembers, pages)}
            </div>
        </div>
    );

}

export default OurTeam;