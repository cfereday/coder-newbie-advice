const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const meetupsTemplate = path.resolve(`src/templates/meetups.js`)
    // Query for markdown nodes to use in creating pages.

    resolve(
      graphql(
        `
         {
          site {
            siteMetadata {
              title
              author
            }
          }
          allMarkdownRemark(sort: {fields: [frontmatter___kind]}, filter: {fields: {slug: {regex: "/meetups/|/bootcamps/"}}}) {
            edges {
              node {
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
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        let meetups = result.data.allMarkdownRemark.edges

        // Create blog post pages.
        meetups.forEach(meetup => {
          console.log(meetup)
          createPage({
            path: meetup.node.fields.slug,
            component: meetupsTemplate,
            context: {
              slug: meetup.node.fields.slug
            },
          })
        })


      })
    )
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
