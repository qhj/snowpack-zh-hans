// import { Link, graphql } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
import FeatureList from '../components/featureList'

// import Layout from '../components/layout'

const Home: React.FC = () => {
  return (
    <Layout
      heroOrCover={<Hero />}
      content={<FeatureList className="grid-area-content" />}
    />
    // <>
    //   <GridBanner />
    //   <NavigationBar></NavigationBar>
    //   <Hero></Hero>
    //   <Menu></Menu>
    //   <FeatureList></FeatureList>
    // </>
  )
}

export default Home
