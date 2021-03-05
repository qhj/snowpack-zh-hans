// import { useStaticQuery, Link, graphql, PageProps } from 'gatsby'

import { ReactElement, useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import SEO from './seo'
import Banner from './banner'
import NavBar from './navBar'
import Menu from '../components/menu'
import { useMedia } from 'react-media'

// interface QueryResult {
//   site: {
//     siteMetadata: {
//       title: string
//     }
//   }
// }

// const Layout: React.FC<PageProps> = ({ children }: PageProps) => {
//   const data = useStaticQuery<QueryResult>(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `
//   )
//   return (
//     <div>
//       <Link to={'/'}>
//         <h3>{data.site.siteMetadata.title}</h3>
//       </Link>
//       {children}
//     </div>
//   )
// }

interface Slot {
  heroOrCover?: ReactElement
  main: ReactElement
}

interface LayoutProps {
  description?: string
  title: string
}

export interface DisplayMenu {
  (): void
}

const Layout: React.FC<Slot & LayoutProps> = ({
  title,
  description,
  heroOrCover,
  main,
}: Slot & LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const displayMenu: DisplayMenu = () => setIsOpen(!isOpen)
  const [stuck, setStuck] = useState(true)
  const sticky = useRef<HTMLElement>(null)
  const isMediumScreen = useMedia({
    query: '(min-width: 768px)',
  })
  // https://github.com/gatsbyjs/gatsby/issues/5835#issuecomment-396146389
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        setStuck(!stuck)
      },
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1],
      }
      // https://stackoverflow.com/a/61115077
    )
    if (sticky.current) {
      observer.observe(sticky.current)
    }
    return () => {
      observer.unobserve(sticky.current)
    }
    // https://medium.com/@She_Daddy/using-the-intersection-observer-api-dbe13144b5da
  }, [])

  return (
    <>
      <SEO title={title} description={description} />
      <Helmet>
        <body className={isOpen ? 'overflow-hidden' : 'overflow-visible'} />
        {/* https://stackoverflow.com/a/46405558 */}
      </Helmet>
      <Banner />
      <NavBar displayMenu={displayMenu} ref={sticky} />
      {heroOrCover}
      <section className="grid mt-6 mx-auto gap-6 grid-main md:grid-cols-main grid-cols-main-auto max-w-main px-6">
        <aside
          className={`md:sticky grid-area-menu p-6 pb-4 overflow-y-auto w-full md:block md:w-64 md:max-h-menu bg-nav z-40 box-border md:bg-white fixed inset-x-0 bottom-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
          style={{
            top: !isMediumScreen
              ? sticky.current?.getBoundingClientRect().bottom
              : '3.5rem',
            // https://stackoverflow.com/a/11396681
          }}
        >
          <Menu />
        </aside>
        <div>{main}</div>
      </section>
    </>
  )
}

export default Layout
