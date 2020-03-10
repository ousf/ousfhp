import React from "react"
import styled from "styled-components"

import COLOR from "../const/color"

const Wrapper = styled.div`
  box-sizing: border-box;
  color: ${props => props.textcolor};
  background-color: ${props => props.color};
  padding: 7px 20px;
  font-family: "Noto Sans JP";
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  align-self: flex-start;
`

Wrapper.defaultProps = {
  textcolor: COLOR.BASE,
  color: COLOR.PRIMARY,
}

const Badge = props => {
  return (
    <Wrapper color={props.color} textcolor={props.textcolor}>
      {props.children}
    </Wrapper>
  )
}

export default Badge
