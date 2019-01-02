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
    <Link to="/meetups/germany-austria-switzerland">Germany, Austria, Switzerland</Link>
    <br/>
    <br/>
    <Link to="/meetups/germany-berlin">Germany, Berlin</Link>
      <br/>
      <br/>
      <Link to="/meetups/germany-hamburg">Germany, Hamburg</Link>
      <br/>
      <br/>
      <Link to="/meetups/germany-koeln">Germany, Koeln</Link>
      <br/>
      <br/>
      <Link to="/meetups/germany-leipzig">Germany, Leipzig</Link>
      <br/>
      <br/>
    <Link to="/meetups/germany-munich">Germany, Munich</Link>
    <br/>
    <br/>
    <Link to="/meetups/germany-nuremberg">Germany, Nuremberg</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-brighton">UK, Brighton</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-bristol">UK, Bristol</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-edinburgh">UK, Edinburgh</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-glasgow">UK, Glasgow</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-ireland">UK, Ireland</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-leeds">UK, Leeds</Link>
    <br/>
    <br/>
      <Link to="/meetups/uk-london">UK, London</Link>
      <br/>
      <br/>
    <Link to="/meetups/uk-manchester">UK, Manchester</Link>
    <br/>
    <br/>
    <Link to="/meetups/uk-scotland">UK, Scotland</Link>
    <br/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnInPerson
