import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DonateButton from "./donateButton";

const Layout = ({ children }) => {
    return (
        <div className="global-wrapper">
            <div className="header" id="home">
                <Link to="/"><StaticImage src='../images/logo.png' alt='West End Lyric Logo' className="header_logo"/></Link>
                <ul className="header_link-wrapper">
                    <li><DonateButton className="header_donate-button"/></li>
                    <li className="header_link-wrapper_list-item"><Link to="/" className="header_link">Home</Link></li>
                    <li className="header_link-wrapper_list-item"><Link to="/about" className="header_link">About</Link>
                        <ul className="header_sub-menu">
                            <li><Link className="header_sub-link" to="/about/our-mission">Our Mission</Link></li>
                            <li><Link className="header_sub-link" to="/about/our-team">Our Team</Link></li>
                            <li><Link className="header_sub-link" to="/about/our-sponsors">Our Sponsors</Link></li>
                            <li><Link className="header_sub-link" to="/about/card-to-culture">Card to Culture</Link></li>
                        </ul>
                    </li>
                    <li className="header_link-wrapper_list-item"><Link to="/events" className="header_link">Events</Link></li>
                    <li className="header_link-wrapper_list-item"><Link to="/contact" className="header_link">Contact</Link></li>
                </ul>
            </div>
            {children}
            <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
        </div>
    );
}

export default Layout;