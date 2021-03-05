// import { Link, graphql } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
import FeatureList from '../components/featureList'

const Home: React.FC = () => {
  return (
    <Layout
      heroOrCover={<Hero />}
      main={<FeatureList className="grid-area-content" />}
    />
  )
}

export default Home
