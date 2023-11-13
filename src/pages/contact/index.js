import React from "react";
import '../../style/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from "../../components/layout.jsx";


const ContactPage = () => {
    return (
        <Layout>
            <main className="contact-page">
                <div className="section-title">Contact Us</div>
                <ul>
                    <li className="contact-page_section">
                        <div className="contact-section-title">Sign Up For Our Mailing List</div>
                        <form name="subscribe-form" action="https://formspree.io/f/mpzgezzr" method="post">
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" name="name" id="full-name" required="" />
                            <label htmlFor="email-address">Email Address</label>
                            <input type="email" name="_replyto" id="email-address" required="" />
                            <div className="contact-title">Please select the mailing lists you're interested in joining:</div>
                            <div className="checkbox"> 
                                <input type="checkbox" id="auditions" name="auditions" value="Auditions" />
                                <label htmlFor="auditions"> Auditions</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="performances" name="performances" value="Performances" />
                                <label htmlFor="performances"> Upcoming Events / Performances</label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </li>
                    <li className="contact-page_section">
                        <div className="contact-section-title">Send Us A Message</div>
                        <form name="contact-form" action="https://formspree.io/f/mgejbeek" method="post">
                                <label htmlFor="full-name">Full Name</label>
                                <input type="text" name="name" id="full-name" required="" />
                                <label htmlFor="email-address">Email Address</label>
                                <input type="email" name="_replyto" id="email-address" required="" />
                                <label htmlFor="message">Message</label>
                                <textarea rows="5" name="message" id="message" placeholder="" required=""></textarea>
                                <input type="submit" value="Submit" />
                        </form>
                    </li>
                </ul>
                
            </main>
        </Layout>
    )
}

export default ContactPage;

export const Head = () => <title>West End Lyric | Contact</title>