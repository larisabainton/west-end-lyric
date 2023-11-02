import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import SocialMediaIcons from '../socialMediaIcons';

const Contact = () => {
    return (
    <div className="contact" id="contact">
        <ul className="contact-list">
            <li className="contact-list_email contact-list_item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-list_icon"/>
                <div className="contact-list_title">Email</div>
                <div className="contact-list_text">westendlyric@gmail.com</div>
            </li>
            <li className="contact-list_social-media contact-list_item">
                <FontAwesomeIcon icon={faThumbsUp} className="contact-list_icon"/>
                <div className="contact-list_title">Connect</div>
                <SocialMediaIcons className="contact-list_social-media-links" />
            </li>
        </ul>
    </div>
    );
}

export default Contact;