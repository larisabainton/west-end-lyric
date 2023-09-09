import React from 'react';

const heading = "Our Story";
const title = "Get to Know Us";
const text = "West End Lyric is a new performing arts collective in Boston’s West End, receiving fiscal sponsorship through Backroom Boston with in-kind support at The Boston Synagogue.";

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