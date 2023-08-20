import React from 'react';
import logo from '../images/logo.png'

class Header extends React.Component {
    render() {
        return (<div className="header">
            <img src={logo} alt='West End Lyric Logo' className="header_logo"/>
            <div className="header_link-wrapper">
                <div className="header_link">Home</div>
                <div className="header_link">Events</div>
                <div className="header_link">About</div>
                <div className="header_link">Contact</div>
            </div>
            
        </div>);
    }
}

export default Header;