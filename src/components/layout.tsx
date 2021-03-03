// import { useStaticQuery, Link, graphql, PageProps } from 'gatsby'

import { ReactElement, useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Banner from './banner'
import NavBar from './navBar'
import Menu from '../components/menu'

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
  heroOrCover: ReactElement
  content: ReactElement
}

export interface DisplayMenu {
  (): void
}

const Layout: React.FC<Slot> = ({ heroOrCover, content }: Slot) => {
  const [isOpen, setIsOpen] = useState(false)
  const displayMenu: DisplayMenu = () => setIsOpen(!isOpen)
  const [stuck, setStuck] = useState(true)
  const sticky = useRef<HTMLElement>(null)
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
      <Helmet>
        <body className={isOpen ? 'overflow-hidden' : 'overflow-visible'} />
        {/* https://stackoverflow.com/a/46405558 */}
      </Helmet>
      <Banner />
      <NavBar displayMenu={displayMenu} ref={sticky} />
      {heroOrCover}
      <section className="grid mt-6 mb-12 mx-auto gap-6 grid-main md:grid-cols-main grid-cols-main-auto max-w-main px-6">
        <aside
          className={`p-6 pb-4 w-full md:block md:w-64 bg-nav box-border md:box-content md:bg-white fixed md:static inset-x-0 bottom-0 ${
            isOpen ? 'block overflow-auto' : 'hidden'
          }`}
          style={{
            top: (() => sticky.current?.getBoundingClientRect().bottom)(),
            // https://stackoverflow.com/a/11396681
          }}
        >
          <Menu className="grid-area-menu"></Menu>
        </aside>
        <article>{content}</article>
      </section>
    </>
  )
}

export default Layout
