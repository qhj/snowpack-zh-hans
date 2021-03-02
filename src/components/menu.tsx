import { Link } from 'gatsby'

interface SubSection {
  url: string
  title: string
}

interface Section {
  header: string
  url: string
  links?: SubSection[]
}

const Menu: React.FC<{ className?: string }> = ({
  className,
}: {
  className?: string
}) => {
  return (
    <nav className={className}>
      <ol className="leading-7">
        {lists.map(element => {
          if (!element.links) {
            return (
              <li className="mt-6 first:mt-0" key={element.url}>
                <Link
                  className="hover:underline text-xl font-semibold"
                  to={element.url}
                >
                  {element.header}
                </Link>
              </li>
            )
          } else {
            const subLists = element.links
            return (
              <li className="mt-6 first:mt-0" key={element.url}>
                <span className="text-xl font-semibold">{element.header}</span>
                <ol>
                  {subLists.map(element => {
                    return (
                      <li key={element.url}>
                        <Link
                          className="hover:underline text-gray-500"
                          to={element.url}
                        >
                          {element.title}
                        </Link>
                      </li>
                    )
                  })}
                </ol>
              </li>
            )
          }
        })}
      </ol>
    </nav>
  )
}

export default Menu

const lists: Array<Section> = [
  {
    header: '概念',
    url: '/concepts',
    links: [
      {
        url: '/how-snowpack-works',
        title: 'Snowpack 的工作机制',
      },
      {
        url: '/dev-server',
        title: 'Dev Server',
      },
      {
        url: '/build-pipeline',
        title: '构建流程',
      },
      {
        url: '/hot-module-replacement',
        title: '快速刷新 & HMR',
      },
    ],
  },
  {
    header: '入门',
    url: 'tutorials',
    links: [
      {
        url: '/quick-start',
        title: '快速上手',
      },
      {
        url: '/getting-started',
        title: '入门',
      },
      {
        url: '/react',
        title: 'React',
      },
      {
        url: '/svelte',
        title: 'Svelte',
      },
    ],
  },
  {
    header: '指南',
    url: '/guides',
  },
  {
    header: '参考',
    url: '/reference',
    links: [
      {
        url: '/configuration',
        title: 'snowpack.config.js',
      },
      {
        url: '/cli-command-line-interface',
        title: '命令行 API',
      },
      {
        url: '/javascript-interface',
        title: 'JavaScript API',
      },
      {
        url: '/plugins',
        title: '插件 API',
      },
      {
        url: '/environment-variables',
        title: '环境变量',
      },
      {
        url: '/hot-module-replacement',
        title: 'HMR API',
      },
      {
        url: '/supported-files',
        title: '支持的文件',
      },
      {
        url: '/common-error-details',
        title: '常见报错',
      },
    ],
  },
  {
    header: '插件目录',
    url: '/plugins',
  },
  {
    header: '社区 & 新闻',
    url: '/news',
  },
]
