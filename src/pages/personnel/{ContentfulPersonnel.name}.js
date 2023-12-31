import React from "react";
import '../../style/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

const displayTeam = teamRole => {
    if (teamRole) {
    return (
        <div className="team-role">{teamRole.jobTitle}</div>
    )}
}

const displayStaff = staffArray => {
    if (staffArray.length) {
        return (
            <ul className="personnel-list">
                <div className="personnel-section-title">Creative Direction</div>
                {staffArray.map(({ production, title}, i) => {
                    const productionName = production[0].name;
                    const year = new Date(production[0].events[0].eventDate).getFullYear();

                    return (
                        <li className="personnel_staff" key={`personnel_staff-${i}`}>{title} in {productionName}, {year}</li>
                    )
                })}
            </ul>)
    }
    
}

const displayRoles = roles => {
    if (roles.length) {
        return (
        <ul className="personnel-list">
            <div className="personnel-section-title">Roles</div>
            {roles.map(({ roleName, event }, i) => {
                const productionName = event[0].production[0].name;
                const year = new Date(event[0].eventDate).getFullYear();

                return (
                    <li className="personnel_role" key={`personnel_role-${i}`}>{roleName} in {productionName}, {year}</li>
                )})}
        </ul>
    )}
};

const PersonnelPage = ({ data }) => {
    const { bio, headshot, name } = data.contentfulPersonnel;
    const roles = data.allContentfulRole.nodes;
    const staffArray = data.allContentfulStaff.nodes;

    return (
        <Layout>
            <main className="personnel-page">
                <div className="personnel-headshot-name">
                    <GatsbyImage image={getImage(headshot)} className="circular-headshot" alt={`${name} headshot`}/>
                    <div className="personnel-info">
                        <div className="personnel-name">{name}</div>
                        {displayTeam(data.contentfulTeamMember)}
                    </div>
                </div>
                {displayRoles(roles)}
                {displayStaff(staffArray)}
                <div className="personnel-bio">{renderRichText(bio)}</div>
            </main>
        </Layout>
    )
}

export default PersonnelPage;

export const Head = ({ data }) => <title>{`West End Lyric | ${data.contentfulPersonnel.name}`}</title>

export const query = graphql`
    query ($id: String!) {
        contentfulPersonnel(id : {eq: $id}) {
            name
            id
            bio {
                raw
            }
            headshot {
                gatsbyImageData
            }
        }
        allContentfulRole(
            filter: {castMember: { id: { eq: $id}}}) {
            nodes {
                roleName
                event {
                  eventDate
                  production {
                    name
                  }
                }
                castMember {
                  id
                }
              }
        }
        allContentfulStaff(filter: {personnel: {id: {eq: $id}}}) {
            nodes {
              title
              production {
                name
                events {
                  eventDate
                }
              }
            }
          }
        contentfulTeamMember(personnel: {id: {eq: $id}}) {
            jobTitle
        }
        
    }`