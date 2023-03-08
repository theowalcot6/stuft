/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Stuft.ai`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png'
      },
    },
  ],
};
