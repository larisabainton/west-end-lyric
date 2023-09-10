import React from 'react';

const cardToCulture = <a href="https://massculturalcouncil.org/organizations/card-to-culture/"> Card to Culture </a>;
const massCulturalCouncil = <a href="https://massculturalcouncil.org/">Mass Cultural Council</a>;
const departmentTransitionalAssistance = <a href="https://www.mass.gov/orgs/women-infants-children-nutrition-program">Department of Transitoinal Assistance</a>;
const massHealthConnector = <a href="https://www.mahealthconnector.org/"> Massachusetts Health Connector</a>;
const wicNutritionProgram = <a href="https://www.mass.gov/orgs/women-infants-children-nutrition-program"> Women, Infants, & Children (WIC) Nutrition Program</a>;
const ebt = <a href="https://www.mass.gov/info-details/ebt-card-to-culture-organizations">EBT</a>;
const wic = <a href="https://www.mass.gov/info-details/get-discounts-with-your-wic-card#cultural-organizations-">WIC</a>;
const connectorCare= <a href="https://www.mahealthconnector.org/learn/plan-information/connectorcare-plans/connectorcare-card-to-culture">Connector Care</a>;


class CardToCulture extends React.Component {
    render() {
        return (
        <div className="card-to-culture">
            <div className="card-to-culture_title">Card to Culture</div>
            <div className="card-to-culture_text">
                <p>West End Lyric is pleased to participate in the {cardToCulture} program, a collaboration between {massCulturalCouncil} and the {departmentTransitionalAssistance}, the {massHealthConnector}, and the {wicNutritionProgram} by extending discounts to EBT, WIC, and Connector Care cardholders.</p>
                <ul>
                    <li>For admission-based performances, admission is free with an eligible {ebt} card.</li>
                    <li>For admission-based performances, admission is free with an eligible {wic} card.</li>
                    <li>For admission-based performances, admission is $5 (unlimited) with a {connectorCare} card.</li>
                </ul>
            </div>
        </div>);
    }
}

export default CardToCulture;