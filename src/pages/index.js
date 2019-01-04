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
    <Link class="in-person" to="/learn-in-person/">Learn in Person</Link>
    <br/>
    <br/>
    <Link class="online" to="/learn-online/">Learn Online</Link>
    <br/>
    <br/>

    <p>Know of some great resources that we don't? Found a typo or anything else you think needs improvement?
      Please help us make our website better and help more people learn to code by opening
      <a href="https://github.com/charlottebrf/coder-newbie-advice/issues"> issues </a> or
      <a href="https://github.com/charlottebrf/coder-newbie-advice/pulls"> pull requests! </a></p>
  </Layout>
)

export default IndexPage
