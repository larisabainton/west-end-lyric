import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcons ({ className }) {
    return (
       <div className={className}>
          <a href="https://www.facebook.com/westendlyric/" target="_blank" rel="noreferrer">
               <FontAwesomeIcon icon={faFacebook} aria-label="West End Lyric Facebook link" />
          </a>
          <a href="https://www.linkedin.com/company/west-end-lyric" target="_blank" rel="noreferrer">
               <FontAwesomeIcon icon={faLinkedin} aria-label="West End Lyric Linked in link"/>
          </a>
          <a href="https://www.instagram.com/westendlyric/" target="_blank" rel="noreferrer">
               <FontAwesomeIcon icon={faInstagram} aria-label="West End Lyric Instagram link"/>
          </a>
       </div>
        
)}