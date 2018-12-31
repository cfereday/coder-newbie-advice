import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Israel = () => (
  <Layout>
    <SEO title="Israel" />
    <h1>Meetups</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Israel
