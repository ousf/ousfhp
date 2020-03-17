import React from "react"
import { graphql } from "gatsby"

//import COLOR from "../const/color"

import Layout from "../components/layout"
import Card from "../components/card"
import PostCard from "../components/posts/postcard"

const PostsPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Card
        title="投稿一覧"
        seemoreShow="False"
        theme="primary"
        barShow="False"
      ></Card>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <PostCard
            title={title}
            linkto={node.frontmatter.path}
            date={node.frontmatter.date}
            key={node.id}
          />
        )
      })}
    </div>
  )
}

export default PostsPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            path
          }
        }
      }
    }
  }
`
