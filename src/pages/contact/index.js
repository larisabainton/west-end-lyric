import React from "react";

import Layout from "../../components/layout.jsx";


const ContactPage = () => {
    return (
        <Layout>
            <main className="contact-page">
                <div className="contact-page_signup-form">
                <iframe title="mailing list form" src="https://docs.google.com/forms/d/e/1FAIpQLSdQOASsuKROvkQ1NSae5FvLi5rA2Mtn5zKqWIOKPadVbZkejg/viewform?embedded=true" width="640" height="833" frameborder="0">Loading…</iframe>
                </div>
            </main>
        </Layout>
    )
}

export default ContactPage;

export const Head = () => <title>West End Lyric | Contact</title>