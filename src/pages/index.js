import * as React from "react";
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

const IndexPage = () => {
  return (
    <div>
      <DonateButton className= "body_donate-button" />
      <Header />
      <main>
        <Cover />
        <AboutUs />
        <Events />
        <OurTeam />
        <CardToCulture />
        <Sponsors />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>West End Lyric</title>