import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Learn to code for free</h1>
    <p>This site has been created to be a useful source of information for people interested in learning to code for free.</p>
    <p>We need more diversity in tech and so often the blockers are lack of information and money. We need greater diversity to create better software.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <p>Coding is the new literacy, Michael Pollack</p>
    </div>
    <Link to="/learn-in-person/">Learn in Person</Link>
    <br/>
    <br/>
    <Link to="/learn-online/">Learn Online</Link>
    <br/>
    <br/>
  </Layout>
)

export default IndexPage
