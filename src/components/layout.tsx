// import { useStaticQuery, Link, graphql, PageProps } from 'gatsby'

import { ReactElement, useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Banner from './banner'
import NavBar from './navBar'
import Menu from '../components/menu'

import favicon from '../images/favicon.svg'

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
  title?: ReactElement
  heroOrCover?: ReactElement
  content: ReactElement
  tableOfContents?: ReactElement
}

export interface DisplayMenu {
  (): void
}

const Layout: React.FC<Slot> = ({
  title,
  heroOrCover,
  content,
  tableOfContents,
}: Slot) => {
  const [isOpen, setIsOpen] = useState(false)
  const displayMenu: DisplayMenu = () => setIsOpen(!isOpen)
  const [stuck, setStuck] = useState(true)
  const sticky = useRef<HTMLElement>(null)
  const mediaMatch = window.matchMedia('(min-width: 768px)')
  const [matches, setMatches] = useState(mediaMatch.matches)
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
  useEffect(() => {
    const handler = e => setMatches(e.matches)
    mediaMatch.addEventListener('change', handler)
    return () => mediaMatch.removeEventListener('change', handler)
  })

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
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
            top: !matches
              ? sticky.current?.getBoundingClientRect().bottom
              : '3.5rem',
            // https://stackoverflow.com/a/11396681
          }}
        >
          <Menu />
        </aside>
        <div>
          {title}
          <div className="xl:grid xl:gap-6 grid-content xl:grid-cols-content">
            <div className="xl:relative top-0">
              <aside className="sticky top-14 xl:pt-20 xl:pb-6 grid-area-toc">
                {tableOfContents}
              </aside>
            </div>
            <article className="py-6 grid-area-article">{content}</article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
