import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import DonateButton from "./donateButton";

const getLinksObject = (productionArray, pagesArray) => {
    const linksArray = [];

    productionArray.forEach(({ name, id, events }) => {
        const eventDates = events
            .map(event => new Date(event.eventDate))
            // filter if production date is in the past (before today's date)
            .filter(date => date - new Date());

        if (eventDates.length) {
            const matchingPage = pagesArray.find(page => page.node.pageContext && page.node.pageContext.id === id);
            linksArray.push({ name, link: matchingPage.node.path })
        }
    });

    return linksArray;
}

const getEventsMenu = (productionArray, pagesArray) => {
    const linksArray = getLinksObject(productionArray, pagesArray);

    return linksArray.map(({ name, link }, i) => {
        return (
            <li key={`event-link-${i}`}><Link className="header_sub-link" to={link}>{name}</Link></li>
        )
    })
}

const menu = (productionArray, pagesArray, donateButton) => {
    return (
        <ul className="header_link-wrapper">
            {donateButton}
            <li className="header_link-wrapper_list-item"><Link to="/" className="header_link">Home</Link></li>
            <li className="header_link-wrapper_list-item"><div className="header_link">About</div>
                <ul className="header_sub-menu">
                    <li><Link className="header_sub-link" to="/about/our-mission">Our Mission</Link></li>
                    <li><Link className="header_sub-link" to="/about/our-team">Our Team</Link></li>
                    <li><Link className="header_sub-link" to="/about/our-sponsors">Our Sponsors</Link></li>
                    <li><Link className="header_sub-link" to="/about/card-to-culture">Card to Culture</Link></li>
                </ul>
            </li>
            <li className="header_link-wrapper_list-item"><div className="header_link">Events</div>
                <ul className="header_sub-menu">
                    {getEventsMenu(productionArray, pagesArray)}
                </ul>
            </li>
            <li className="header_link-wrapper_list-item"><Link to="/contact" className="header_link">Contact</Link></li>
        </ul>
    )
}

const header = (productionArray, pagesArray) => {
    const donateButton = <li><DonateButton className="header_donate-button"/></li>
    
    return (
        <div className="header" id="home">
            <Link className="header_logo" to="/"><StaticImage src='../images/logo.png' alt='West End Lyric Logo' /></Link>
            <div className="desktop-menu">{menu(productionArray, pagesArray, donateButton)}</div>
            <div className="mobile-menu">
                <StaticImage alt="" placeholder="none" className="menu_image" src="../images/menu.svg" />
                {menu(productionArray, pagesArray)}
            </div>
        </div>
    )
}

const Layout = ({ children }) => {
    const productionData = useStaticQuery(graphql`
        query LayoutQuery {
            allSitePage(filter: {path: {regex: "/events/"}}) {
                edges {
                  node {
                    path
                    pageContext
                  }
                }
              }
              allContentfulProduction(sort: {events: {eventDate: ASC}}) {
                nodes {
                  name
                  id
                  events {
                    eventDate
                  }
                }
              }
        }
    `)

    const productionArray = productionData.allContentfulProduction.nodes;
    const pagesArray = productionData.allSitePage.edges;

    return (
        <div className="global-wrapper">
            {header(productionArray, pagesArray)}
            {children}
            <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
        </div>
    );
}

export default Layout;