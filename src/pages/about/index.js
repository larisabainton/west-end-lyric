import React from "react";

import Layout from "../../components/layout.jsx";
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <Layout>
            <main className="about-page">
                <Link to ="/about/our-mission">Our Mission</Link>
                <Link to ="/about/our-team">Our Team</Link>
                <Link to ="/about/our-sponsors">Our Sponsors</Link>
                <Link to="/card-to-culture">Card to Culture</Link>
            </main>
        </Layout>
    )
}

export default AboutPage;

export const Head = () => <title>West End Lyric | About</title>