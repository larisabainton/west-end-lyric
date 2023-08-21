import React from 'react';
import backroomBostonLogo from '../images/backroom_boston.png';
import bostonSynagogueLogo from '../images/boston_synagogue.png';

const backroomText = "BackRoom Boston starts as a venue for discovering and belonging through music. It’s the downtown Boston hub for rising talent – and the creators of new Jewish and related cultural experiences. It’s also an incubator and platform for music across genres.It’s the home of the Boston Festival of New Jewish Music, The Klezmer Ensemble: Mamaliga, West End Lyric and other programs related to Emerging Artists and downtown Boston community engagement. Experience music ranging from Klezmer, Israeli jazz, Ladino and Eastern European folk to classical, opera and Broadway. The beauty of these live performances is that music is a universal language that inspires joy, hope, discovery, reflection and connection.BackRoom Boston is a 501(c)3 is located at The Boston Synagogue, 55 Martha Road in Boston’s West End Charles River Park neighborhood. Donations to support these programs are tax-free."

class Sponsors extends React.Component {
    render() {
        return (
        <div className="sponsors">
            <div className="sponsors-text">
                <div className="sponsors-text_title">Boston Synagogue</div>
                <div className="sponsors-text_sub-title">BackRoom Boston</div>
                <div className="sponsors-text_paragraph">{backroomText}</div>
            </div>
            <div className="sponsors-photo">
                <img src={bostonSynagogueLogo}/>
                <img src={backroomBostonLogo}/>
            </div>
        </div>);
    }
}

export default Sponsors;