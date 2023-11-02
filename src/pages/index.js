import * as React from "react";
import '../style/main.scss';

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

const IndexPage = () => {
  return (
    <div>
      <DonateButton className= "body_donate-button" />
      <Layout>
        <main>
          <Cover />
          <AboutUs />
          <Events />
          <OurTeam />
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