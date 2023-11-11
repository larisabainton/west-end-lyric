import React from "react";

const TicketsButton = ({ ticketsLink, id }) => {
    if (!ticketsLink) {
        return;
    }

    return (
        <div className="tickets-button" id={id}>
            <a target="_blank" rel="noreferrer" href={ticketsLink}>Get Tickets</a>
        </div>
    )
}

export default TicketsButton;