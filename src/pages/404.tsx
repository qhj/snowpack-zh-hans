import Layout from '../components/layout'
const NotFoundPage: React.FC = () => {
  const text = '404：没找到'
  return (
    <Layout
      title={text}
      main={<h1 className="font-bold text-4xl">{text}</h1>}
    />
  )
}

export default NotFoundPage
