import React from 'react';
import { Link } from 'gatsby';
import { useInView } from "react-intersection-observer";
import TicketsButton from "../ticketsButton";

const onChange = (inView, entry) => {
    const navbar = document.getElementById("production_navigation");
    const ticketsButton = document.getElementById("navbar-tickets");

    if (entry.boundingClientRect.bottom <= 0) {
        navbar.classList.add('sticky');
        ticketsButton.classList.add('visible');
        ticketsButton.classList.remove('not-visible');
    } else if (entry.boundingClientRect.bottom > 0) {
        navbar.classList.remove('sticky');
        ticketsButton.classList.add('not-visible')
        ticketsButton.classList.remove('visible')
    }
}

const Navigation = ({ ticketsLink }) => {
    const { ref } = useInView({ onChange })

    return (
        <div className="navigation-wrapper" ref={ref}>
            <div className="production_navigation" id="production_navigation">
                <div className="production_navigation_links">
                    <Link to="#production_about">About</Link> |
                    <Link to="#production_artists">Artists</Link> |
                    <Link to="#production_venues">Venue</Link>
                </div>
                <TicketsButton ticketsLink={ticketsLink} id={"navbar-tickets"}/>
            </div>
        </div>
    )
}

export default Navigation;