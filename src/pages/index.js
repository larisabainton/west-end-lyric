import * as React from "react";
import { graphql } from "gatsby";
import '../style/main.scss';

import AboutUs from '../components/AboutUs';
import CardToCulture from "../components/CardToCulture";
import Contact from '../components/Contact';
import Cover from '../components/Cover';
import DonateButton from "../components/donateButton";
import Events from '../components/Events';
import Header from '../components/Header';
import OurTeam from '../components/OurTeam';
import Sponsors from '../components/Sponsors';
import '@fortawesome/fontawesome-svg-core/styles.css';

const upcomingEvents = [
  {
    date: 17,
    month: "Nov",
    year: 2023,
    time: "7pm",
    location: "Somerville Music Spaces",
    title: "The Card Game / Coffee Cantata ",
  },
  {
    date: 19,
    month: "Nov",
    year: 2023,
    time: "3pm",
    location: "Boston Synagogue",
    title: "The Card Game / Coffee Cantata ",
  },
  {
    date: 17,
    month: "Dec",
    year: 2023,
    time: '4pm',
    location: "Boston Synagogue",
    title: "Women of Tin Pan Alley Cabaret",
  },
  {
    date: 5,
    month: "Apr",
    year: 2024,
    time: '7pm',
    location: "Boston Synagogue",
    title: "L'amico Fritz",
  },
  {
    date: 7,
    month: "Apr",
    year: 2024,
    time: '3pm',
    location: "Boston Synagogue",
    title: "L'amico Fritz",
  },
  {
    date: 5,
    month: "May",
    year: 2024,
    time: '3pm',
    location: "Boston Synagogue",
    title: "Out of Darkness / We Will Outlive Them",
  },
]

const IndexPage = ({ data }) => {
  const { teamMembers } = data.site.siteMetadata;

  return (
    <div>
      <DonateButton className= "body_donate-button" />
      <Header />
      <Cover />
      <AboutUs />
      <Events eventList={upcomingEvents} />
      <OurTeam teamMembers={teamMembers}/>
      <CardToCulture />
      <Sponsors />
      <Contact />
      <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>West End Lyric</title>

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        teamMembers {
          headshot
          name
          jobTitle
        }
      }
    }
  }
`