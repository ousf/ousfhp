import React from "react"
import { graphql } from "gatsby"

//import COLOR from "../const/color"

import Card from "../components/card"
import BookCard from "../components/books/bookcard"
import BookCardMobile from "../components/books/bookcardmobile"
import withMediaComponent from "../components/withMediaComponent"

const Item = withMediaComponent(BookCard, BookCardMobile)

const BooksPage = ({ data, location }) => {
  const books = data.allMarkdownRemark.edges
  return (
    <div>
      <Card
        title="会誌紹介"
        theme="primary"
        seemoreShow="False"
        barShow="False"
      ></Card>
      {books.map(({ node }) => {
        return (
          <Item
            key={node.id}
            title={node.frontmatter.title}
            linkto={node.frontmatter.path}
            bookimg={node.frontmatter.bookimg.childImageSharp.fluid.src}
            badge={node.frontmatter.badge}
            description={node.frontmatter.description}
          />
        )
      })}
    </div>
  )
}

export default BooksPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "book" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            badge
            description
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
`
