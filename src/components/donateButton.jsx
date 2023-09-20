import React from "react";
import { useId } from "react";

export default function DonateButton ({ className }) {
    return (
        <a id={`donate-button ${useId()}`} className= {`donate-button ${className}`} href="https://bostonsynagogue.org/west-end-lyric/" target="_blank" rel="noreferrer">Donate</a>
    )
}