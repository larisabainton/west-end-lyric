import React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from '../../components/layout';

const getLink = (name, pages) => {
    const page = pages.find(page => page.node.pageContext && page.node.pageContext.name === name)

    return page.node.path;
}

const OurTeamPage = ({ data }) => {
    const teamMembers = data.allContentfulPersonnel.nodes;
    const pages = data.allSitePage.edges;
    
    return(
        <Layout>
            <main className="our-team">
                <div className="section-title">Our Team</div>
                <ul className="teamMembers-list">
                    {teamMembers.map(({ name, team_member }) => {
                        const jobTitle = team_member[0].jobTitle;

                        return (
                            <li className="teamMembers-list-item" key={name}>
                                <div className="teamMembers-list-item_job">{jobTitle}</div>
                                <Link className="teamMembers-list-item_name" to={getLink(name, pages)}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </Layout>
    )
}

export default OurTeamPage;

export const Head = () => <title>West End Lyric | Our Team</title>

export const query = graphql`
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
            }
        }
        allSitePage(filter: {path: {regex: "/personnel/"}}) {
            edges {
              node {
                path
                pageContext
              }
            }
          }
    }
`