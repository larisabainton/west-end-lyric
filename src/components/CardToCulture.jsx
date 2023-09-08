import React from 'react';


class CardToCulture extends React.Component {
    render() {
        return (
        <div className="card-to-culture">
            <div className="card-to-culture_title">Card to Culture</div>
            <div className="card-to-culture_text">
                <p>West End Lyric is pleased to participate in the Card to Culture program, a collaboration between Mass Cultural Council and the Department of Transitional Assistance, the Massachusetts Health Connector, and the Women, Infants & Children (WIC) Nutrition Program by extending discounts to EBT, WIC, and ConnectorCare cardholders.</p>
                <ul>
                    <li>For admission-based performances, admission is free with an eligible EBT card.</li>
                    <li>For admission-based performances, admission is free with an eligible WIC card.</li>
                    <li>For admission-based performances, admission is $5 (unlimited) with a ConnectorCare card.</li>
                </ul>
                <p>See the complete list of participating organizations offering EBT, WIC, and ConnectorCare discounts.</p>
            </div>
        </div>);
    }
}

export default CardToCulture;