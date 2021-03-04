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
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'heading[depth=2]': 'text-3xl font-bold mt-8 mb-5',
                'heading[depth=3]': 'text-2xl font-bold mt-8 mb-5',
                'heading[depth=4]': 'text-xl font-bold mb-2',
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
              className: 'text-nav',
            }
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
  ],
}

export default gatsbyConfig
