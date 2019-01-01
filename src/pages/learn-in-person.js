import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnInPerson = () => (
  <Layout>
    <SEO title="Learn In Person" />
    <h1>Choose from a location we have information on</h1>
      <br/>
      <br/>
      <Link to="/meetups/germany">Germany</Link>
      <br/>
      <br/>
      <Link to="/meetups/uk">UK</Link>
      <br/>
      <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnInPerson
