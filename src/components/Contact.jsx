import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

class Contact extends React.Component {
    render() {
        return (<div className="contact" id="contact">
            <ul className="contact-list">
                <li className="contact-list_email contact-list_item">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-list_icon"/>
                    <div className="contact-list_title">Email</div>
                    <div className="contact-list_text">westendlyric@gmail.com</div>
                </li>
                <li className="contact-list_social-media contact-list_item">
                    <FontAwesomeIcon icon={faThumbsUp} className="contact-list_icon"/>
                    <div className="contact-list_title">Connect</div>
                    <div className="contact-list_social-media-links">
                        <a href="https://www.facebook.com/westendlyric/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} aria-label="Facebook link"/></a>
                        <a href="https://www.linkedin.com/company/west-end-lyric" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} aria-label="Linked in link"/></a>
                        <a href="https://www.instagram.com/westendlyric/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} aria-label="Instagram link"/></a>
                    </div>
                </li>
            </ul>
        </div>);
    }
}

export default Contact;