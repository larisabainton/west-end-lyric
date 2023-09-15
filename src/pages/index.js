import * as React from "react";
import '../style/main.scss';

import akelaHeadshot from '../images/headshots/Akela_headshot.jpg';
import hannahHeadshot from '../images/headshots/Hannah_headshot.jpg';
import jessicaHeadshot from '../images/headshots/Jessica_headshot.jpg';
import juliaHeadshot from '../images/headshots/Julia_headshot.jpg';
import larisaHeadshot from '../images/headshots/Larisa_headshot.jpg';


import AboutUs from '../components/AboutUs';
import CardToCulture from "../components/CardToCulture";
import Contact from '../components/Contact';
import Cover from '../components/Cover';
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

const teamMembers = [
  {
    name: 'Jessica Bloch-Moisand',
    jobTitle: 'Creative Producer',
    headshot: jessicaHeadshot,
  },
  {
    name: 'Larisa Bainton',
    jobTitle: 'Director of Development',
    headshot: larisaHeadshot,
  }, 
  {
    name: 'Hannah Shanefield',
    jobTitle: 'Director of Marketing & Media',
    headshot: hannahHeadshot,
  },
  {
    name: 'Akela Franklin',
    jobTitle: 'Director of Education & Outreach',
    headshot: akelaHeadshot,
  },
  {
    name: 'Julia Pottinger',
    jobTitle: 'Production Manager',
    headshot: juliaHeadshot,
  }
]


const IndexPage = () => {
  return (
    <div>
      <Header />
      <Cover />
      <AboutUs />
      <Events eventList={upcomingEvents} />
      <OurTeam teamMembers={teamMembers}/>
      <CardToCulture />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>West End Lyric</title>
