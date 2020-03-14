import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import Item from "./noticeitem"
import Card from "../card"

const Wrapper = styled(motion.custom(Link))`
  width: 80%;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
`

const Notice = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY.MM.DD")
              title
              path
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <Card title="おしらせ" linkto="/posts">
      {posts.map(({ node }) => {
        return (
          <Wrapper
            to={"/post/" + node.frontmatter.path}
            whileHover={{ x: 10 }}
            whileTap={{ x: -5 }}
          >
            <Item date={node.frontmatter.date} title={node.frontmatter.title} />
          </Wrapper>
        )
      })}
    </Card>
  )
}

export default Notice
