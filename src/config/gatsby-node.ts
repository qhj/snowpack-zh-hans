import * as path from 'path'
import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

interface Edge {
  node: {
    fields: {
      slug: string
    }
  }
}

interface QueryResult {
  allMarkdownRemark: {
    edges: Edge[]
  }
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions: { createNodeField },
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<QueryResult>(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  if (!result.data) {
    throw new Error('Err: can not fetch data')
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/content.tsx'),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions: { setBabelPlugin },
}) => {
  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
