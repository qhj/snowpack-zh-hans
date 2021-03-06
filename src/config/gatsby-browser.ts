import { GatsbyBrowser } from 'gatsby'

import './src/styles/global.css'

// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (entry.intersectionRatio > 0) {
          document
            .querySelectorAll(`ol#toc > li > a[href="#${id}"]`)
            .forEach(element => {
              element.classList.add('xl:text-blue-500', 'xl:underline')
            })
        } else {
          document
            .querySelectorAll(`ol#toc > li > a[href="#${id}"]`)
            .forEach(element => {
              element.classList.remove('xl:text-blue-500', 'xl:underline')
            })
        }
      })
    },
    {
      rootMargin: '-30% 0% -40%',
    }
  )
  document.querySelectorAll(`article [id]`).forEach(element => {
    observer.observe(element)
  })
}
