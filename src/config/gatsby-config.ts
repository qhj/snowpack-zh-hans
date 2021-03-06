import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Snowpack 简体中文',
    description: 'Snowpack——更快的前端构建工具',
    author: {
      name: '千魂剑',
      github: 'https://github.com/qhj',
    },
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
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '#',
              isIconAfterHeader: true,
              className: 'text-nav italic opacity-0 group-hover:opacity-100',
              maintainCase: true,
            },
          },
          'gatsby-remark-images',
          'gatsby-remark-prismjs',
          'gatsby-remark-translation',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
  ],
}

export default gatsbyConfig
