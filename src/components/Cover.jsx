import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const WelcomeText = () => (
    <div className="cover_welcome-text">
        <div className="cover_welcome-text--small">Welcome to</div>
        <div className="cover_welcome-text--large">West End <br></br> Lyric</div>
        <div className="cover_welcome-text_social-media-icons">
            <a href="https://www.facebook.com/westendlyric/" target="_blank"><FontAwesomeIcon icon={faFacebook} aria-label="Facebook link" /></a>
            <a href="https://www.linkedin.com/company/west-end-lyric" target="_blank"><FontAwesomeIcon icon={faLinkedin} aria-label="Linked in link"/></a>
            <a href="https://www.instagram.com/westendlyric/" target="_blank"><FontAwesomeIcon icon={faInstagram} aria-label="Instagram link"/></a>
        </div>
    </div>
    
)

class Cover extends React.Component {
    render() {
        return (
        <div className="cover">
            <div className="cover_background">
                <div className="cover_color-block"></div>
                <div className="cover_photo"></div>
            </div>  
            <div className="cover_foreground">
                <WelcomeText />
            </div>
        </div>);
    }
}

export default Cover;