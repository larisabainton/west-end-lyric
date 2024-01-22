import React from "react";

const defaultButton = (className) => {
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

const DonateButton = ({ className, buttonText, buttonLink }) => {
    if (buttonText && buttonLink) {
        return (
            <form className={`${className}-form`} action={buttonLink} target="_blank">
                <input 
                    className= {`donate-button ${className}`} 
                    type="submit"
                    value={buttonText}/>
            </form>
        )
    }

    return defaultButton(className);
}

export default DonateButton;