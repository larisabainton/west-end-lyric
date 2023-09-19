import React from "react";

export default function DonateButton ({ className }) {
    return (
        <a id="donate-button" className= {`donate-button ${className}`} href="https://bostonsynagogue.org/west-end-lyric/" target="_blank" rel="noreferrer">Donate</a>
    )
}