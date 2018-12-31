import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnOnline = () => (
  <Layout>
    <SEO title="Learn Online" />
    <h1>Choose what you're interested in learning below</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnOnline
