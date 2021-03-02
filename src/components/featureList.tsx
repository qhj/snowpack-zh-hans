import { ReactElement } from 'react'

interface Feature {
  header: string
  description: ReactElement
}

const FeatureListButton: React.FC = () => (
  <div className="text-center mt-8 text-2xl">
    <a
      className="inline-block w-44 shadow-sm hover:shadow-md my-1 mx-3 px-8 py-2 bg-big-button rounded-md border"
      href="/tutorials/quick-start"
    >
      开 始
    </a>
    <a
      className="inline-block w-44 shadow-sm hover:shadow-md my-1 mx-3 px-8 py-2 text-blue-500 rounded-md border border-black"
      href="/how-snowpack-works"
    >
      了解更多
    </a>
  </div>
)

const FeatureList: React.FC<{ className?: string }> = ({
  className,
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <div>
        <h2 className="font-bold text-5xl mt-10 mb-4">Snowpack 是什么？</h2>
        <p className="my-6">
          <strong>
            Snowpack 是一个如闪电般快速的前端构建工具，专为现代 Web 而设计。
          </strong>
          它是你开发流程中又重又复杂的打包器（如 Webpack 或 Parcel）的可选替代。
          Snowpack 利用 JavaScript 的原生模块系统（
          <a
            className="text-blue-600"
            href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import"
          >
            称为 ESM
          </a>
          ）去避免不必要的工作并保持快速，无论你的项目有多大
        </p>
        <p className="mt-6">一旦你试用过后，就再也回不去了。</p>
      </div>
      <ul className="grid grid-cols-feature my-10 gap-y-4 gap-x-8">
        {feature.map(element => {
          return (
            <li className="p-1 my-2" key={element.header}>
              <h3 className="font-semibold text-xl mb-1">
                {'✅️ ' + element.header}
              </h3>
              {element.description}
            </li>
          )
        })}
      </ul>
      <FeatureListButton />
    </div>
  )
}

export default FeatureList

const feature: Array<Feature> = [
  {
    header: '瞬间启动',
    description: (
      <>
        Snowpack 非打包式的 Web 开发服务器
        <strong>在 50ms 或更短的时间内启动</strong>
        并在大型项目中保持快速。
      </>
    ),
  },
  {
    header: '一次构建，永久缓存',
    description: (
      <>
        Snowpack 决不会重复两次生成同一个文件。由浏览器的 JavaScript
        原生模块系统（ESM）强力驱动
      </>
    ),
  },
  {
    header: 'HMR，快速刷新',
    description: (
      <>
        无需刷新。通过&nbsp;
        <a className="text-blue-600" href="/concepts/hot-module-replacement">
          HMR 和快速刷新
        </a>
        可以立即在浏览器中看到对 React、 Preact 和 Svelte 的修改
      </>
    ),
  },
  {
    header: '开箱即用的支持',
    description: (
      <>
        享受 Snowpack 对 JSX，Typescript，React，Preact，CSS Modules&nbsp;
        <a className="text-blue-600" href="/reference/supported-files">
          等等
        </a>
        的内置支持。
      </>
    ),
  },
  {
    header: '优化',
    description: <>通过内置的优化工具和支持你所喜欢打包器的插件来进行构建</>,
  },
  {
    header: '插件？插件！',
    description: (
      <>
        Babel？Sass？MDX？浏览整个&nbsp;
        <a className="text-blue-600" href="/plugins">
          Snowpack 插件目录
        </a>
        以结合你喜欢的构建工具（或者
        <a className="text-blue-600" href="/reference/plugins">
          创建自己的插件！
        </a>
        ）
      </>
    ),
  },
]
