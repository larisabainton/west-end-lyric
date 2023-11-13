import React from "react";
import '../style/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import CardToCulture from "../../components/index/CardToCulture";
import Layout from "../../components/layout.jsx";

const CardToCulturePage = () => {
    return (
        <Layout>
            <main className="card-to-culture-page"><CardToCulture /></main>
        </Layout>
    )
}

export default CardToCulturePage;

export const Head = () => <title>West End Lyric | Card to Culture</title>