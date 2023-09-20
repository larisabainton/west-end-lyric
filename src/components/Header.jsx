import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DonateButton from "./donateButton";

class Header extends React.Component {
    render() {
        return (
        <div className="header" id="home">
            <StaticImage src='../images/logo.png' alt='West End Lyric Logo' className="header_logo"/>
            <div className="header_link-wrapper">
                <DonateButton className="header_donate-button"/>
                <Link to="/#home" className="header_link">Home</Link>
                <Link to="/#events" className="header_link">Events</Link>
                <Link to="/#aboutUs" className="header_link">About</Link>
                <Link to="/#contact" className="header_link">Contact</Link>
            </div>
            
        </div>);
    }
}

export default Header;