/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/west-end-lyric",
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Lato`,
            file: 'https://fonts.googleapis.com/css2?family=Lato&display=swap',
          },
          {
            name: 'Fraunces',
            file: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,800&display=swap',
          }
        ],
      },
    },],
}
