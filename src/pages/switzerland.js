import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Switzerland = () => (
  <Layout>
    <SEO title="Switzerland" />
    <h1>Meetups</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Switzerland
