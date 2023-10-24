import React from "react";

export default function DonateButton ({ className }) {
    return (
        <form className={`${className}-form`} action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="hosted_button_id" value="6UJPSGSENHG7S" />
            <input 
                className= {`donate-button ${className}`} 
                type="submit"
                value="Donate"/>
        </form>
    )
}