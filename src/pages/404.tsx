import Layout from '../components/layout'

const main = (
  <div>
    <h1 className="font-bold text-4xl">404：没找到</h1>
    <p>如果你访问的 URL 没错，那就是我还没翻译到🙈</p>
  </div>
)

const NotFoundPage: React.FC = () => {
  return <Layout title={'404：没找到'} main={main} />
}

export default NotFoundPage
