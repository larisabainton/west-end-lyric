import React from 'react';

const heading = "Our Story";
const title = "Get to Know Us";
const text = "West End Lyric is an all women led, Boston-based performing arts collective that seeks to bring a diverse cultural community together through music. We employ our core values - inclusivity, accessibility, community artistry and support through opportunity - in order to inspire, educate and provide a space for artists and audiences alike to share in high quality artistic expression in Boston’s West End.";

class AboutUs extends React.Component {
    render() {
        return (
        <div className="aboutUs" id="aboutUs">
            <div className="aboutUs_left">
                {heading}
            </div>
            <div className="aboutUs_right">
                <div className="aboutUs_right-title">{title}</div>
                <div className="aboutUs_right-text">{text}</div>
            </div>
        </div>);
    }
} 

export default AboutUs;