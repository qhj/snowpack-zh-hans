import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'

interface Heading {
  depth: number
  value: string
}

interface PageQueryResult {
  markdownRemark: {
    headings: Heading[]
    html: string
    frontmatter: {
      title: string
    }
  }
}

interface TOCProps {
  headings: Heading[]
  className: string
}

const TOC: React.FC<TOCProps> = ({ headings, className }: TOCProps) => (
  <div className="xl:relative top-0 max-w-min">
    <aside
      className={`sticky top-14 w-80 xl:pt-20 xl:pb-6 grid-area-toc ${className}`}
    >
      <h4 className="font-bold text-lg">目录</h4>
      <ol id="toc">
        {headings.map((heading, index) => {
          if (index % 2 === 0) {
            return (
              <li key={heading.value}>
                <a className="text-gray-500" href={`#${heading.value}`}>
                  {heading.value}
                </a>
              </li>
            )
          }
        })}
      </ol>
    </aside>
  </div>
)

const Content: React.FC<PageProps<PageQueryResult>> = ({
  data,
}: PageProps<PageQueryResult>) => {
  const content = data.markdownRemark
  return (
    <Layout
      title={content.frontmatter.title}
      main={
        <div className="grid xl:gap-6 grid-content xl:grid-cols-content">
          <TOC className="hidden xl:block" headings={content.headings} />
          <article className="py-6 grid-area-article min-w-0">
            <h1 className="text-4xl font-bold my-10">
              {content.frontmatter.title}
            </h1>
            <TOC className="xl:hidden" headings={content.headings} />
            <div
              className="mt-14"
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          </article>
        </div>
      }
    ></Layout>
  )
}

export default Content

export const pageQuery = graphql`
  query($slug: String!) {
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
