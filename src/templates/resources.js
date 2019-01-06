import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import NewbieLinks from '../components/newbieLinks'
import HomeLink from '../components/homeLink'

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

        <NewbieLinks description={"Learn online"} url={"/learn-online/"}/>
        <br/>
        <br/>
        <HomeLink/>
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
