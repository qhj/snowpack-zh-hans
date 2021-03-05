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

const Content: React.FC<PageProps<PageQueryResult>> = ({
  data,
}: PageProps<PageQueryResult>) => {
  const content = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout
      title={content.frontmatter.title}
      main={
        <div className="xl:grid xl:gap-6 grid-content xl:grid-cols-content">
          <div className="xl:relative top-0 max-w-min">
            <aside className="sticky top-14 w-80 xl:pt-20 xl:pb-6 grid-area-toc">
              <h4 className="font-bold text-lg">目录</h4>
              <ol id="toc">
                {content.headings.map(heading => {
                  return (
                    <li key={heading.value}>
                      <a className="text-gray-500" href={`#${heading.value}`}>
                        {heading.value}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </aside>
          </div>
          <article className="py-6 grid-area-article">
            <h1 className="text-4xl font-bold my-10">
              {content.frontmatter.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </article>
        </div>
      }
    ></Layout>
  )
}

export default Content

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
