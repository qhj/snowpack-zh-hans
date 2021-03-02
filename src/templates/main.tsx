import { graphql, PageProps } from 'gatsby'

interface PageQueryResult {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
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
    <div>
      <h1>{siteTitle}</h1>
      <h2>{content.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
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
      html
      frontmatter {
        title
      }
    }
  }
`
