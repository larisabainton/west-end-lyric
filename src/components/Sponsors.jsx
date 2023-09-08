import React from 'react';
import backroomBostonLogo from '../images/sponsor-logos/backroom_boston_logo.png';
import bostonSynagogueLogo from '../images/sponsor-logos/boston_synagogue_logo.png';
import mccLogo from "../images/sponsor-logos/mcc_logo.jpg";

const bostonSynagogueText = "The Boston Synagogue is a warm, friendly, pluralistic community in the Downtown West End neighborhood. Welcome to people of all Jewish denominations– singles, couples, as well as interfaith couples & LGBTQ."
const backroomText = "BackRoom Boston starts as a venue for discovering and belonging through music. It’s the downtown Boston hub for rising talent – and the creators of new Jewish and related cultural experiences. It’s also an incubator and platform for music across genres. BackRoom Boston is a 501(c)3 located at The Boston Synagogue, 55 Martha Road in Boston’s West End Charles River Park neighborhood. Donations to support these programs are tax-free."
const mccText = "Core to the mission of the Mass Cultural Council is their role as an advocate on behalf of the arts, humanities, and sciences. As an independent state agency they work to ensure that culture has a voice in the most important decisions facing the Commonwealth and its communities."

class Sponsors extends React.Component {
    render() {
        return (
        <div className="sponsors">
            <div className="sponsors-text">
                <div className="sponsors-text_title">Sponsors</div>
                <div className="sponsors_list">
                    <div className="sponsors_list-item">
                        <div className="sponsors-photo"><img src={bostonSynagogueLogo} alt="Boston Synagogue Logo"/></div>
                        <div className="sponsors-name">Boston Synagogue</div>
                        <p className="sponsors-description">{bostonSynagogueText}</p>
                    </div>
                    <div className="sponsors_list-item">
                        <div className="sponsors-photo"><img src={backroomBostonLogo} alt="Backroom Boston Logo"/></div>
                        <div className="sponsors-name">Backroom Boston</div>
                        <p className="sponsors-description">{backroomText}</p>
                    </div>
                    <div className="sponsors_list-item">
                        <div className="sponsors-photo"><img src={mccLogo} alt="Mass Cultural Council Logo"/></div>
                        <div className="sponsors-name">Mass Cultural Council</div>
                        <p className="sponsors-description">{mccText}</p>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Sponsors;