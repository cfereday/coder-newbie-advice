import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnInPerson = () => (
  <Layout>
    <SEO title="Learn In Person" />
    <h1>Choose from a location we have information on</h1>
      <br/>
    <Link to="pages/meetups/germany.md">Germany</Link>
    <br/>
    <br/>
    <Link to="pages/meetups/uk.md">UK</Link>
    <br/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnInPerson
