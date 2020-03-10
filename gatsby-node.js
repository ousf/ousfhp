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
    const resultBlog = await graphql(`{
        allMarkdownRemark(
            sort: {
                fields: [frontmatter___date],
                order: DESC
            }
            limit:1000
            filter:{
                frontmatter:{
                    type:{
                        eq: "blog"
                    }
                }
            }
        ){
            edges{
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        path
                        title
                    }
                }
            }
        }
    }
    `

    )

    if (resultBlog.errors) {
        throw resultBlog.errors
    }

    const blogposts = resultBlog.data.allMarkdownRemark.edges

    blogposts.forEach((post, index) => {
        const previous = (index === blogposts.length - 1) ? null : blogposts[index + 1].node
        const next = (index === 0) ? null : blogposts[index - 1].node

        createPage({
            path: "/post/" + post.node.frontmatter.path,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next
            }
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
            getNode
        })
        createNodeField({
            name: `slug`,
            node,
            value
        })
    }
}