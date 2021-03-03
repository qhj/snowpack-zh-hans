import { forwardRef } from 'react'
import { DisplayMenu } from './layout'

interface LinkProps {
  className?: string
  to: string
  target?: string
  children?
}

const Link: React.FC<LinkProps> = ({
  className,
  to,
  target,
  children,
}: LinkProps) => {
  return (
    <a
      className={'text-sm align-middle p-2 ' + className}
      href={to}
      target={target}
    >
      {children}
    </a>
  )
}

interface NavBarProps {
  displayMenu: DisplayMenu
}

const NavigationBar = forwardRef<HTMLElement, NavBarProps>(
  ({ displayMenu }: NavBarProps, ref) => {
    return (
      <nav
        className="px-2 flex bg-nav h-14 items-center text-white sticky top-0"
        ref={ref}
      >
        <button
          className="flex justify-center items-center md:hidden w-8 h-8"
          type="button"
          onClick={displayMenu}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div className="flex-grow md:hidden"></div>
        <Link className="flex text-2xl font-bold items-center p-5" to="/">
          <svg
            className="mr-2 w-logo h-logo fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <g transform="translate(-1.000000, 0.000000)" fillRule="nonzero">
              <path d="M635.92,462.7 L347.92,14.7 C342.03,5.54 331.89,0 321,0 C310.11,0 299.97,5.54 294.08,14.7 L6.08,462.7 C-0.250773249,472.547007 -0.699487627,485.064987 4.91,495.34 C10.522069,505.612419 21.2945349,512 33,512 L609,512 C620.71,512 631.48,505.61 637.09,495.33 C642.699457,485.058495 642.250708,472.543372 635.92,462.7 Z M321,91.18 L406.39,224 L321,224 L257,288 L218.94,249.94 L321,91.18 Z"></path>
            </g>
          </svg>
          <span>Snowpack</span>
        </Link>
        <div className="flex-grow"></div>
        <Link
          to="https://github.com/snowpackjs/snowpack/releases"
          target="_blank"
        >
          <span className="md:pr-4 md:border-r md:border-gray-500 text-gray-300 hover:text-white">
            v3.0.13
          </span>
        </Link>
        {data.map(element => {
          const SVG = element.svg
          return (
            <Link
              className="text-gray-300 hover:text-white hidden md:block"
              key={element.url}
              to={element.url}
              target="_blank"
            >
              <SVG className="w-4 h-4" />
            </Link>
          )
        })}
      </nav>
    )
  }
)

export default NavigationBar

interface Props {
  className?: string
}

interface Item {
  url: string
  svg: React.FC<Props>
}

const data: Array<Item> = [
  {
    url: 'https://github.com/snowpackjs/snowpack',
    svg: ({ className }: Props) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ></path>
      </svg>
    ),
  },
  {
    url: 'https://twitter.com/snowpackjs',
    svg: ({ className }: Props) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        ></path>
      </svg>
    ),
  },
  {
    url: 'https://discord.gg/snowpack',
    svg: ({ className }: Props) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 210 240"
      >
        <path d="M84.79 90.45c-6.45 0-11.55 5.66-11.55 12.57s5.21 12.57 11.55 12.57c6.45 0 11.55-5.66 11.55-12.57.11-6.91-5.09-12.57-11.55-12.57zm41.32 0c-6.45 0-11.55 5.66-11.55 12.57s5.21 12.57 11.55 12.57c6.45 0 11.55-5.66 11.55-12.57s-5.09-12.57-11.55-12.57z" />
        <path
          fill="currentColor"
          d="M185.4 0H24.6C11.04 0 0 11.04 0 24.72v162.24c0 13.68 11.04 24.72 24.6 24.72h136.08l-6.36-22.2 15.36 14.28 14.52 13.44L210 240V24.72C210 11.04 198.96 0 185.4 0zm-46.32 156.72s-4.32-5.16-7.92-9.72c15.72-4.44 21.72-14.28 21.72-14.28-4.92 3.24-9.6 5.52-13.8 7.08-6 2.52-11.76 4.2-17.4 5.16-11.52 2.16-22.08 1.56-31.08-.12-6.84-1.32-12.72-3.24-17.64-5.16-2.76-1.08-5.76-2.4-8.76-4.08-.36-.24-.72-.36-1.08-.6-.24-.12-.36-.24-.48-.36-2.16-1.2-3.36-2.04-3.36-2.04s5.76 9.6 21 14.16c-3.6 4.56-8.04 9.96-8.04 9.96-26.52-.84-36.6-18.24-36.6-18.24 0-38.64 17.28-69.96 17.28-69.96 17.28-12.96 33.72-12.6 33.72-12.6l1.2 1.44c-21.6 6.24-31.56 15.72-31.56 15.72s2.64-1.44 7.08-3.48c12.84-5.64 23.04-7.2 27.24-7.56.72-.12 1.32-.24 2.04-.24 7.32-.96 15.6-1.2 24.24-.24 11.4 1.32 23.64 4.68 36.12 11.52 0 0-9.48-9-29.88-15.24l1.68-1.92s16.44-.36 33.72 12.6c0 0 17.28 31.32 17.28 69.96 0 0-10.2 17.4-36.72 18.24z"
        />
      </svg>
    ),
  },
]
