import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnOnline = () => (
  <Layout>
    <SEO title="Learn Online" />
    <h1>Choose what you're interested in learning below</h1>
    <Link to="/online-resources/free-ebooks">Free e-books</Link>
    <br/>
    <br/>
    <Link to="/online-resources/learn-to-code-resources">Online resources</Link>
    <br/>
    <br/>
    <Link to="/online-resources/podcasts">Podcasts</Link>
    <br/>
    <br/>
    <Link to="/online-resources/tech-tests-and-interviews">Tech tests and interviews</Link>
    <br/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnOnline
