import React from 'react';

/* 

interface teamMembers = Array[{
    name: string,
    jobTitle: string,
    headshot: string (url),
}]

*/

class OurTeam extends React.Component {
    constructor({
        teamMembers
    }) {
        super();
        this.teamMembers = teamMembers;

    }

    render() {
        return (<div className="ourTeam">
            <div className="ourTeam_title">Our Team</div>
            <div className="ourTeam_paragraph">Meet the women behind West End Lyric</div>
            <div className="ourTeam_teamMembers">
                {this.teamMembers.map(({ name, jobTitle, headshot}) => (
                    <div className="ourTeam_teamMember" key={name}>
                        <img className="teamMember_headshot" src={headshot} alt=''/>
                        <div className="teamMember_information">
                            <div className = "teamMember_name">{name}</div>
                            <div className = "teamMember_jobTitle">{jobTitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
    }
}

export default OurTeam;