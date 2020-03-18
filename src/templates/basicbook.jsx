import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"

import META from "../const/meta"
import COLOR from "../const/color"

import Layout from "../components/layout"
import Card from "../components/card"
import Badge from "../components/badge"
import Button from "../components/button"

const Content = styled.div`
  margin-right: auto;
  box-sizing: border-box;
  padding: 20px;
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  & h1 {
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin: 30px 0 20px 0;
    padding-left: 15px;
    box-sizing: border-box;
    font-weight: 600;
    position: relative;
    &::before {
      content: "";
      width: 5px;
      height: 100%;
      background-color: ${COLOR.PRIMARY};
      position: absolute;
      left: 0;
      top: 0.05rem;
    }
  }
  & p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`

const MainImg = styled.img`
  width: 300px;
`

const Container = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BookName = styled.span`
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  margin-right: -0.5rem;
  line-height: 2.5rem;
`

const BasicBookTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const mainImgSrc = frontmatter.bookimg.childImageSharp.fluid.src
  return (
    <div>
      <Helmet>
        <title>
          {frontmatter.title} | {META.siteName}
        </title>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:image" content={mainImgSrc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Card
        title={frontmatter.title}
        theme="primary"
        seemoreShow="false"
        barShow="false"
      ></Card>
      <Card titleShow="false" barShow="false" seemoreShow="false">
        <Container>
          <MainImg src={mainImgSrc} />
          <div css="margin: 20px 0;">
            <Badge>{frontmatter.badge}</Badge>
          </div>
          <BookName>{frontmatter.title}</BookName>
          <a
            css="text-decoration: none;margin: 10px 0;"
            href={frontmatter.booth}
          >
            <Button textcolor={COLOR.BOOTH}>BOOTHで購入</Button>
          </a>
          <Content dangerouslySetInnerHTML={{ __html: html }}></Content>
        </Container>
      </Card>
    </div>
  )
}

export default BasicBookTemplate

export const pageQuery = graphql`
  query BookPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        badge
        booth
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
`
