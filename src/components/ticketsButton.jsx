import React from "react";

const TicketsButton = ({ ticketsLink }) => {
    return (
        <div className="tickets-button">
            <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
        </div>
    )
}

export default TicketsButton;