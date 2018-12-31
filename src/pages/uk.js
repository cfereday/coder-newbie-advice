import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const UK = () => (
  <Layout>
    <SEO title="UK" />
    <h1>Meetups</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UK
