module.exports = {
  siteMetadata: {
    title: 'Ben Robertson',
    description: 'I\'m Ben Robertson, a senior software engineer working at Gatsby and writing about front end development and web accessibility.',
    author: '@banquos_ghost',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require('remark-slug')]
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'benrobertson',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ed6a5a',
        theme_color: '#ed6a5a',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
