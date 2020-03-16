import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
//import { motion } from "framer-motion"

import Card from "../card"
import Badge from "../badge"

import COLOR from "../../const/color"

const Title = styled.div`
  font-family: "Noto Sans JP";
  font-weight: 500;
  font-size: 1.4rem;
  padding: 5px 0;
  letter-spacing: 0.3rem;
  line-height: 1.6rem;
  color: ${COLOR.BLACK};
  margin: 10px 0;
  margin-right: auto;
`

const Wrapper = styled(Link)`
  text-decoration: none;
  display: block;
`

const Container = styled.div`
  width: 80%;
  box-sizing: border-box;
  padding: 20px 0;
  text-align: center;
`

const BookImage = styled.img`
  box-shadow: 0 0 5px ${COLOR.SHADOW_B};
  width: 100%;
  margin-bottom: 10px;
`

const Description = styled.div`
  text-decoration: none;
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
`

const BookCardMobile = props => {
  return (
    <Wrapper to={"/book/" + props.linkto}>
      <Card barShow="false" titleShow="false" linkto={"/book/" + props.linkto}>
        <Container>
          <BookImage src={props.bookimg} />
          <Badge>{props.badge}</Badge>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </Container>
      </Card>
    </Wrapper>
  )
}

export default BookCardMobile
