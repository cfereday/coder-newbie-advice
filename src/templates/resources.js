import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class ResourcesTemplate extends React.Component {
  render() {
    const resources = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = resources.excerpt;

    console.log(resources);

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${resources.frontmatter.country} | ${siteTitle}`}
        />


        <h1>{resources.frontmatter.kind}</h1>
        <h1>{resources.frontmatter.description}</h1>

        <div id="markdown" dangerouslySetInnerHTML={{ __html: resources.html }} />

        <Link class="online" to="/learn-online/">Go back to Learn Online</Link>
        <br/>
        <br/>
        <Link class="homepage" to="/">Go back to the homepage</Link>
        <br/>
        <br/>
      </Layout>
    )
  }
}

export default ResourcesTemplate

export const pageQuery = graphql`
  query ResourcesBySlug($slug: String!) {
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
          }
    }
  }
`
