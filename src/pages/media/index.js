import React from "react";
import '../../style/main.scss';
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import getPathForProduction from "../../functions/getPathForProduction";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MediaPage = ({ data }) => {
    const productionArray = data.allContentfulProduction.nodes;
    const pagesArray = data.allSitePage.edges;

    const productions = productionArray.filter(production => production.productionPhotos && production.productionPhotos.length)

    return (
        <Layout>
            <main className="media-page">
                <div className="section-title">Media</div>
                <ul className="media_list">
                    {productions.map(({ id, name, productionPhotos }) => {
                        const linkPath = getPathForProduction(id, pagesArray);

                        return(
                            <li className="media_list-item">
                                <Link to={linkPath} className="link-title media_list-item_title">{name}</Link>
                                <ul className="media_photos-list">
                                    {productionPhotos.map(photo => <GatsbyImage className="media-photo" image={getImage(photo.gatsbyImageData)} alt=""/>)}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </Layout>
    )
}

export default MediaPage;

export const Head = () => <title>West End Lyric | Media</title>

export const query = graphql`
    query MediaPageQuery {
        allContentfulProduction {
            nodes {
                name
                id
                productionPhotos {
                    gatsbyImageData
                }
            }
        }
        allSitePage(filter: {path: {regex: "/events/"}}) {
            edges {
              node {
                path
                pageContext
              }
            }
          }
    }
`