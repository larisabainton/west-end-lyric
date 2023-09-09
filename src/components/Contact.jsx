import React from 'react';

class Contact extends React.Component {
    render() {
        return (<div className="contact" id="contact">
            <ul className="contact-list">
                <li className="contact-list_email contact-list_item">
                    <div className="contact-list_title">Email</div>
                    <div className="contact-list_text">blochperformingarts@gmail.com</div>
                </li>
                <li className="contact-list_social-media contact-list_item">
                    <div className="contact-list_title">Connect</div>  
                </li>
            </ul>
        </div>);
    }
}

export default Contact;