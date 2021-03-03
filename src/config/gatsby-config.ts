import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Snowpack——更快的前端构建工具',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'translation',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
  ],
}

export default gatsbyConfig
