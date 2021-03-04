import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'

interface Heading {
  depth: number
  value: string
}

interface PageQueryResult {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    headings: Heading[]
    html: string
    frontmatter: {
      title: string
    }
  }
}

const Main: React.FC<PageProps<PageQueryResult>> = ({
  data,
}: PageProps<PageQueryResult>) => {
  const content = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout
      title={
        <h1 className="text-4xl font-bold my-10">
          {content.frontmatter.title}
        </h1>
      }
      content={<div dangerouslySetInnerHTML={{ __html: content.html }} />}
      tableOfContents={
        // <div dangerouslySetInnerHTML={{ __html: content.tableOfContents }} />
        <ul id="toc">
          {content.headings.map(heading => {
            return (
              <li key={heading.value}>
                <a href={`#${heading.value}`}>{heading.value}</a>
              </li>
            )
          })}
        </ul>
      }
    ></Layout>
  )
}

export default Main

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      headings {
        depth
        value
      }
      html
      frontmatter {
        title
      }
    }
  }
`
