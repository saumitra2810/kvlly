module.exports = {
  siteMetadata: {
    title: ``,
    description: `Kelly Vaughn is a developer and the founder of The Taproom Agency, a Shopify consultancy specializing in high-growth merchants.`,
    author: `@kvlly`,
    image: 'https://kvlly.com/images/photo.jpg',
    twitterUsername: '@kvlly',
    siteUrl: 'https://www.kvlly.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        url: `https://kvlly.com`,
        name: `Kelly Vaughn`,
        short_name: `personal-site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        image: `src/images/photo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-132105470-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:300,300i,400`,
          `Montserrat\:300,400,400i,500`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
