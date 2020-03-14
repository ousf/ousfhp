import React from "react"
import styled from "styled-components"

import COLOR from "../../const/color"

const Wrapper = styled.div`
  margin: 10px 0;
`

const Date = styled.div`
  font-family: "Roboto";
  margin-bottom: 7px;
  font-size: 1rem;
  font-weight: 300;
  color: ${COLOR.BLACK};
`

const Title = styled.div`
  font-family: "Noto Sans JP";
  font-size: 1.2rem;
  color: ${COLOR.BLACK};
`

const Item = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
    </Wrapper>
  )
}

export default Item
