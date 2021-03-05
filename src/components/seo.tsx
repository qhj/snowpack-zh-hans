import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../images/favicon.svg'

interface Site {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface SEOProps {
  description?: string
  lang?: string
  title: string
}

const SEO: React.FC<SEOProps> = ({ description, lang, title }: SEOProps) => {
  const { site }: Site = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata?.title
  return (
    <Helmet>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <link rel="icon" href={favicon} />
      <title>{title + (siteTitle ? ` | ${siteTitle}` : '')}</title>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'zh-hans',
  description: '',
}

export default SEO
