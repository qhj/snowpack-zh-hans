// import { useStaticQuery, Link, graphql, PageProps } from 'gatsby'

import Banner from './banner'
import NavBar from './navBar'
import Menu from '../components/menu'
import { ReactElement } from 'react'

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

const Layout: React.FC<Slot> = ({ heroOrCover, content }: Slot) => (
  <>
    <Banner />
    <NavBar />
    {heroOrCover}
    <section className="grid mt-6 mb-12 mx-auto gap-6 grid-main xl:grid-cols-main-auto max-w-main px-6">
      <aside className="m-6 w-64">
        <Menu className="grid-area-menu"></Menu>
      </aside>
      <article>{content}</article>
    </section>
  </>
)

export default Layout
