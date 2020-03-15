import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import COLOR from "../../const/color"

import Card from "../card"
import Badge from "../badge"

const Content = styled(Link)`
  width: 80%;
  box-sizing: border-box;
  display: flex;
  text-decoration: none;
`

const BookImage = styled.img`
  width: 100%;
  box-shadow: 0 0 5px ${COLOR.SHADOW_B};
`

const Detail = styled.div`
  margin-left: 5%;
  display: block;
  width: 55%;
`

const Title = styled.div`
  font-family: "Noto Sans JP";
  font-weight: 500;
  font-size: 1.4rem;
  padding: 5px 0;
  letter-spacing: 0.3rem;
  line-height: 1.6rem;
  color: ${COLOR.BLACK};
  margin: 10px 0 20px 0;
  margin-right: auto;
`
const Description = styled.div`
  text-decoration: none;
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
`

const Kaishi = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "book" } } }
        limit: 1
      ) {
        edges {
          node {
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
  `)
  const books = data.allMarkdownRemark.edges
  return (
    <Card title="会誌紹介" linkto="/books">
      {books.map(({ node }) => {
        return (
          <Content to={"/book/" + node.frontmatter.path}>
            <div css="width: 40%;">
              <BookImage
                src={node.frontmatter.bookimg.childImageSharp.fluid.src}
              />
            </div>
            <Detail>
              <Badge>{node.frontmatter.badge}</Badge>
              <Title>{node.frontmatter.title}</Title>
              <Description>{node.frontmatter.description}</Description>
            </Detail>
          </Content>
        )
      })}
    </Card>
  )
}

export default Kaishi
