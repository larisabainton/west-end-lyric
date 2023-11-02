import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import SocialMediaIcons from '../socialMediaIcons';

const WelcomeText = () => (
    <div className="cover_welcome-text">
        <div className="cover_welcome-text--small">Welcome to</div>
        <div className="cover_welcome-text--large">West End <br></br> Lyric</div>
        <SocialMediaIcons className="cover_welcome-text_social-media-icons"/>
    </div>
    
)

class Cover extends React.Component {
    render() {
        return (
        <div className="cover">
            <div className="cover_background">
                <div className="cover_color-block"></div>
                <div className="cover_photo">
                    <StaticImage src="../../images/cover-photo.jpg" alt="Jessica Bloch performing" />
                </div>
            </div>  
            <div className="cover_foreground">
                <WelcomeText />
            </div>
        </div>);
    }
}

export default Cover;