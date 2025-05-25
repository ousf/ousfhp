const path = require(`path`)
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  const blogPost = path.resolve("./src/templates/basicpost.jsx")
  const resultBlog = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  const bookPost = path.resolve("./src/templates/basicbook.jsx")
  const resultBook = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { frontmatter: { type: { eq: "book" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              title
              vol
              badge
              bookimg {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  if (resultBlog.errors) {
    throw resultBlog.errors
  }

  if (resultBook.errors) {
    throw resultBook.errors
  }

  const blogposts = resultBlog.data.allMarkdownRemark.edges
  const bookposts = resultBook.data.allMarkdownRemark.edges

  blogposts.forEach((post, index) => {
    const previous =
      index === blogposts.length - 1 ? null : blogposts[index + 1].node
    const next = index === 0 ? null : blogposts[index - 1].node

    createPage({
      path: "/post/" + post.node.frontmatter.path,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
      
    mode: "SSG",
    })
  })

  bookposts.forEach((post, index) => {
    const previous =
      index === bookposts.length - 1 ? null : bookposts[index + 1].node
    const next = index === 0 ? null : bookposts[index - 1].node

    createPage({
      path: "/book/" + post.node.frontmatter.path,
      component: bookPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
      
    mode: "SSG",
    })
  })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}