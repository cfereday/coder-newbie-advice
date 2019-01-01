import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnInPerson = () => (
  <Layout>
    <SEO title="Learn In Person" />
    <h1>Choose from a location we have information on</h1>
      <br/>
      <br/>
      <p>Choose from the below locations to find out about meetups where you can turn up to and learn to code (as opposed to mainly talk-based meetups)</p>
      <Link to="/meetups/germany-berlin">Germany, Berlin</Link>
      <br/>
      <br/>
      <Link to="/meetups/uk-london">UK, London</Link>
      <br/>
      <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnInPerson
