// import { Link, graphql } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
import FeatureList from '../components/featureList'

const Home: React.FC = () => {
  return (
    <Layout
      description="Snowpack 是一个如闪电般快速的前端构建工具，专为现代 Web 而设计。"
      title="更快的前端构建工具"
      heroOrCover={<Hero />}
      main={<FeatureList className="grid-area-content" />}
    />
  )
}

export default Home
