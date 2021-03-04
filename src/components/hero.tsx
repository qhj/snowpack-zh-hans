import { useState } from 'react'
import { Link } from 'gatsby'

const Hero: React.FC = () => {
  const originalText = 'npm install snowpack'
  const [text, setText] = useState(originalText)
  const [isCopied, setIsCopied] = useState(false)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('npm install snowpack')
      setText('已拷贝至剪贴板！')
      setIsCopied(true)
    } catch (error) {
      console.error(error)
    }
  }
  const restoreText = () => {
    setText(originalText)
    isCopied && setIsCopied(false)
  }
  return (
    <div className="flex items-center justify-center h-screen/2 min-h-80 max-h-120 bg-hero bg-indigo-100 bg-no-repeat bg-hero-position bg-50%">
      <div className="md:w-160 mx-auto py-8">
        <h1 className="text-center text-6xl md:text-8xl font-extrabold mb-3">
          Snowpack
        </h1>
        <p className="text-center text-4xl md:text-5xl">
          更 快 的 前 端 构 建 工 具
        </p>
        <div className="flex justify-center mt-6">
          <Link
            className="font-bold text-2xl text-white bg-big-button py-2 px-8 rounded-md border shadow-sm hover:shadow-md"
            to="/tutorials/quick-start"
          >
            开 始
          </Link>
          <div className="m-2"></div>
          <button
            className="group w-72 font-mono border rounded-md px-4 py-3 shadow-sm border-gray-400 hover:border-blue-500 hover:shadow-md focus:outline-none bg-white"
            onClick={copyToClipboard}
            onMouseLeave={restoreText}
          >
            {!isCopied && (
              <span className="mr-3 text-gray-300 group-hover:text-blue-500">
                $
              </span>
            )}
            <span className="group-hover:text-blue-500">{text}</span>
            {!isCopied && (
              <svg
                className="inline-block stroke-current stroke-2 ml-2 text-gray-300 group-hover:text-blue-500"
                fill="none"
                width="22"
                height="22"
              >
                <polyline points="6 6, 2 6, 2 20, 16 20, 16 16"></polyline>
                <rect x="6" y="2" width="14" height="14"></rect>
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <div className="text-sm font-bold bg-white">
            <a
              className="inline-block px-3 py-1 border border-gray-400 border-r-0 rounded-l-sm hover:text-blue-500 hover:bg-gray-200"
              href="https://github.com/snowpackjs/snowpack"
            >
              ⭐️️ Star
            </a>
            <a
              className="inline-block px-3 py-1 border rounded-r-sm border-gray-400 hover:text-blue-500 hover:bg-gray-200"
              href="https://github.com/snowpackjs/snowpack/stargazers"
            >
              17,385
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
