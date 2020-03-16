import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import mediaQuery from "styled-media-query"

import Card from "../card"

import COLOR from "../../const/color"

const mediaMobile = mediaQuery.lessThan("medium")

const Title = styled.div`
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-size: 1.3rem;
  padding: 5px 0;
  letter-spacing: 0.3rem;
  line-height: 1.4rem;
  color: ${COLOR.BLACK};
  margin-right: auto;
`

const Date = styled.span`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 1rem;
  color: ${COLOR.BLACK};
  padding: 5px 0;
  margin-right: auto;
`

const Wrapper = styled(motion.custom(Link))`
  text-decoration: none;
  display: block;
`

const Container = styled.div`
  width: 80%;
`

const CardT = styled(Card)`
  ${mediaMobile`
      margin: 10px 0;
    `}
`

const PostCard = props => {
  return (
    <Wrapper
      to={"/post/" + props.linkto}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <CardT barShow="false" titleShow="false" seemoreShow="false">
        <Container>
          <Date>{props.date}</Date>
          <Title>{props.title}</Title>
        </Container>
      </CardT>
    </Wrapper>
  )
}

export default PostCard
