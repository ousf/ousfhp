import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"

import META from "../const/meta"
import COLOR from "../const/color"

import Card from "../components/card"

const Date = styled.div`
  color: ${COLOR.BASE};
  font-family: "Roboto";
  font-weight: 300;
`

const Content = styled.div`
  margin-right: auto;
  box-sizing: border-box;
  padding: 20px;
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  & h1 {
    font-size: 1.4rem;
    margin: 10px 0 20px 0;
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

const BasicPostTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Helmet>
        <title>
          {frontmatter.title} | {META.siteName}
        </title>
        <meta property="og:title" content={frontmatter.title} />
      </Helmet>
      <Card title={frontmatter.title} theme="primary" seemoreShow="false">
        <Date>{frontmatter.date}</Date>
      </Card>
      <Card titleShow="false" barShow="false" seemoreShow="false">
        <Content dangerouslySetInnerHTML={{ __html: html }}></Content>
      </Card>
    </div>
  )
}

export default BasicPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
