module.exports = {
  siteMetadata: {
    title: 'Sophie Knight',
  },
  plugins: [
    {resolve: 'gatsby-source-contentful',
    options: {
      spaceId: 'y3imyxpski9z',
      accessToken: 'd83858a028c21fa9b0d315db2fd4ba26450be9b00dab36f1b29c638d5f25df3c'
    }
  },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
