import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DonateButton from "./donateButton";

const Layout = ({ children }) => {
    return (
        <div className="global-wrapper">
            <div className="header" id="home">
                <StaticImage src='../images/logo.png' alt='West End Lyric Logo' className="header_logo"/>
                <div className="header_link-wrapper">
                    <DonateButton className="header_donate-button"/>
                    <Link to="/#home" className="header_link">Home</Link>
                    <Link to="/#aboutUs" className="header_link">About</Link>
                    <Link to="/#events" className="header_link">Events</Link>
                    <Link to="/#contact" className="header_link">Contact</Link>
                </div>
            </div>
            {children}
            <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
        </div>
    );
}

export default Layout;