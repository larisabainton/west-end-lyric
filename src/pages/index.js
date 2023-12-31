import * as React from "react";
import '../style/main.scss';
import { graphql } from "gatsby";


import AboutUs from '../components/index/AboutUs';
import CardToCulture from "../components/index/CardToCulture";
import Contact from '../components/index/Contact';
import Cover from '../components/index/Cover';
import Events from '../components/index/Events';
import OurTeam from '../components/index/OurTeam';
import Sponsors from '../components/index/Sponsors';

import DonateButton from "../components/donateButton";
import Layout from '../components/layout';

import '@fortawesome/fontawesome-svg-core/styles.css';

const IndexPage = ({ data }) => {
  const eventsArray = data.allContentfulEvent.nodes;
  const pagesArray = data.allSitePage.edges;
  const teamMembers = data.allContentfulPersonnel.nodes

  const personnelPages = pagesArray.filter(({ node }) => node.path.match(/personnel/));
  const eventPages = pagesArray.filter(({ node }) => node.path.match(/events/));

  return (
    <div>
      <DonateButton className= "body_donate-button" />
      <Layout>
        <main>
          <Cover />
          <AboutUs />
          <Events events={eventsArray} pages={eventPages}/>
          <OurTeam pages={personnelPages} teamMembers={teamMembers}/>
          <CardToCulture />
          <Sponsors />
          <Contact />
        </main>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>West End Lyric</title>

export const query = graphql`
  query IndexPageQuery {
    allSitePage {
      edges {
        node {
          path
          pageContext
        }
      }
    }
    allContentfulEvent {
      nodes {
          ticketsLink
          eventTitle
          eventDate
          venue {
              name
              website
          }
          production {
              id
              shortDescription {
                  raw
              }
          }
      }
    }
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
`