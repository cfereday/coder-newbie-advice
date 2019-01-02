const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

return new Promise((resolve, reject) => {
    const meetupsTemplate = path.resolve(`src/templates/meetups.js`)
    // Query for markdown nodes to use in creating meetup & bootcamp pages.

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

        // Create meetup & bootcamp pages.
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

  const resourcesTemplate = path.resolve(`src/templates/resources.js`)
  // Query for markdown nodes to use in creating online resources pages.

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
          allMarkdownRemark(sort: {fields: [frontmatter___kind]}, filter: {fields: {slug: {regex: "/online-resources/"}}}) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  kind
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

      let resources = result.data.allMarkdownRemark.edges

      // Create online resources pages.
      resources.forEach(resource => {
        console.log(resource)
        createPage({
          path: resource.node.fields.slug,
          component: resourcesTemplate,
          context: {
            slug: resource.node.fields.slug
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

