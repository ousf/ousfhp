import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import META from "../const/meta"
//import COLOR from "../const/color"

import Card from "../components/card"
import PostCard from "../components/posts/postcard"

const PostsPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet>
        <title>投稿一覧 | {META.siteName}</title>
        <meta property="og:title" content="投稿一覧" />
      </Helmet>
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
