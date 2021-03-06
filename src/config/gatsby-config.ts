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
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'heading[depth=2]': 'text-3xl font-bold mt-8 mb-5 group',
                'heading[depth=3]': 'text-2xl font-bold mt-8 mb-5 group',
                'heading[depth=4]': 'text-xl font-bold mb-2 group',
                paragraph: 'my-3 leading-6',
                'list[ordered=false]': 'list-disc pl-8',
                'list[ordered=true]': 'list-decimal pl-8',
              },
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '#',
              isIconAfterHeader: true,
              className: 'text-nav italic opacity-0 group-hover:opacity-100',
              maintainCase: true,
            },
          },
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-translation',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
  ],
}

export default gatsbyConfig
