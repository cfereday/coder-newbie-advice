import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

class MeetupsTemplate extends React.Component {
  render() {
    const meetups = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = meetups.excerpt;


    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${meetups.frontmatter.country} | ${siteTitle}`}
        />
        <h1>{meetups.frontmatter.country}</h1>
        <h1>{meetups.frontmatter.kind}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {meetups.frontmatter.city}
        </p>
        <div dangerouslySetInnerHTML={{ __html: meetups.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
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
      fields {
        slug
      }
      frontmatter {
        country
        kind
      }
    }
  }
`
