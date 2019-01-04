import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import '../components/layout.css'

class MeetupsTemplate extends React.Component {
  render() {
    const meetups = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = meetups.excerpt;

    console.log(meetups);

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${meetups.frontmatter.country} | ${siteTitle}`}
        />


        <h1 className={""}>{meetups.frontmatter.country}</h1>
        <h2>{meetups.frontmatter.city}</h2>
        <h1>{meetups.frontmatter.kind}</h1>

        <div id="markdown" dangerouslySetInnerHTML={{ __html: meetups.html }} />

        <Link class="in-person" to="/learn-in-person/">Go back to Learn In Person</Link>
        <br/>
        <br/>
        <Link class="homepage" to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default MeetupsTemplate

export const pageQuery = graphql`
  query MeetupsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
          html
          excerpt(pruneLength: 140)
          fields {
            slug
          }
          frontmatter {
            kind
            country
            city
          }
    }
  }
`
