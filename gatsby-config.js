/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/west-end-lyric', // https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/
  siteMetadata: {
    siteUrl: `https://www.westendlyric.com`,
    teamMembers: [
      {
        name: 'Jessica Bloch-Moisand',
        jobTitle: 'Creative Producer',
        headshot: '../images/headshots/Jessica_headshot.jpg',
      },
      {
        name: 'Larisa Bainton',
        jobTitle: 'Director of Development',
        headshot: '../images/headshots/Larisa_headshot.jpg',
      }, 
      {
        name: 'Hannah Shanefield',
        jobTitle: 'Director of Marketing & Media',
        headshot: '../images/headshots/Hannah_headshot.jpg',
      },
      {
        name: 'Akela Franklin',
        jobTitle: 'Director of Education & Outreach',
        headshot: '../images/headshots/Akela_headshot.jpg',
      },
      {
        name: 'Julia Pottinger',
        jobTitle: 'Production Manager',
        headshot: '../images/headshots/Julia_headshot.jpg',
      }
    ]
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
  ],
    
}
