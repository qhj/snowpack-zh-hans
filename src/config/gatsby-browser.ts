import { GatsbyBrowser } from 'gatsby'

import './src/styles/global.css'

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (entry.intersectionRatio > 0) {
          document
            .querySelectorAll(`ul#toc > li > a[href="#${id}"]`)
            .forEach(element => {
              element.classList.add('text-blue-500')
            })
        } else {
          document
            .querySelectorAll(`ul#toc > li > a[href="#${id}"]`)
            .forEach(element => {
              element.classList.remove('text-blue-500')
            })
        }
      })
    },
    {
      rootMargin: '-35% 0% -35%',
    }
  )
  document.querySelectorAll(`article [id]`).forEach(element => {
    observer.observe(element)
  })
}
