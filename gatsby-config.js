module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {resolve: 'gatsby-source-contentful',
    options: {
      spaceId: '8w4mzywabmjc',
      accessToken: '92e61a45c7d7a2df9d193f7bd76cbd30b52c136ca158adb4787038c36bf26424'
    }
  },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
