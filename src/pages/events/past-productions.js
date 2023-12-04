import React from "react";
import '../../style/main.scss';
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import getPathForProduction from "../../functions/getPathForProduction";

const PastProductionsPage = ({ data }) => {
    const productionsArray = data.allContentfulProduction.nodes;
    const pagesArray = data.allSitePage.edges;
    
    // find all productions where every event has occurred in the past
    const pastProductions = productionsArray.filter(({ events }) => events.every(({ eventDate }) => (new Date(eventDate).getTime() - new Date().getTime()) < 0))

    return (
        <Layout>
            <main className="past-productions_page">
                <div className="section-title">Past Productions</div>
                <ul className="past-productions_list">
                    {pastProductions.map(({ name, id }, i) => {
                        const linkPath = getPathForProduction(id, pagesArray)
                        return <li className="past-productions_list-item" key={`production-${i}`}><Link to ={linkPath}>{name}</Link></li>
                    })}
                </ul>
            </main>
        </Layout>
    )
};

export default PastProductionsPage;

export const Head = () => <title>West End Lyric | Past Productions</title>

export const query = graphql`
query PastProductionsQuery {
    allSitePage(filter: {path: {regex: "/events/"}}) {
      edges {
        node {
          path
          pageContext
        }
      }
    }
    allContentfulProduction {
      nodes {
          name
          id
          events {
              eventDate
          }
      }
    }
  }
`