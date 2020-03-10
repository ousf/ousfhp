import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import COLOR from "../const/color"

import SeeMore from "./seemorebutton"

const handleColorTypeBg = (theme, bgcolor) => {
  switch (theme) {
    case "primary":
      return COLOR.PRIMARY
    case "reverse":
      return COLOR.BLACK
    default:
      return bgcolor
  }
}

const handleColorTypeText = (theme, textcolor) => {
  switch (theme) {
    case "primary":
      return COLOR.BASE
    case "reverse":
      return COLOR.BASE
    default:
      return textcolor
  }
}

const Wrapper = styled.div`
  border-radius: 10px;
  background: ${props => handleColorTypeBg(props.theme, props.bgcolor)};
  box-shadow: 5px 5px 10px ${COLOR.SHADOW_B}, -5px -5px 10px ${COLOR.SHADOW_W};
  width: 500px;
  /* min-height: 100px; */
  margin: 40px 0px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`

Wrapper.defaultProps = {
  bgcolor: COLOR.BASE,
}

const Title = styled.span`
  font-family: "Noto Sans JP";
  color: ${props => handleColorTypeText(props.theme, props.color)};
  font-size: 1.4rem;
  letter-spacing: 0.5rem;
  margin-right: -0.5rem;
  font-weight: 500;
  line-height: 1.7rem;
  text-align: center;
`

Title.defaultProps = {
  color: COLOR.BLACK,
}

const Bar = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${props => handleColorTypeText(props.theme, props.color)};
  margin: 20px 0;
`

Bar.defaultProps = {
  color: COLOR.BLACK,
}

const SeeMoreWrapper = styled.div`
  margin-top: 10px;
  margin-left: auto;
`
const LinkT = styled(Link)`
  text-decoration: none;
  color: ${COLOR.PRIMARY};
`

const Card = props => {
  return (
    <Wrapper bgcolor={props.bgcolor} theme={props.theme}>
      <Title
        style={{ display: props.titleShow ? "none" : "" }}
        color={props.textcolor}
        theme={props.theme}
      >
        {props.title}
      </Title>
      <Bar
        style={{ display: props.barShow ? "none" : "" }}
        color={props.textcolor}
        theme={props.theme}
      />
      {props.children}
      <SeeMoreWrapper style={{ display: props.seemoreShow ? "none" : "" }}>
        <LinkT to={props.linkto}>
          <SeeMore />
        </LinkT>
      </SeeMoreWrapper>
    </Wrapper>
  )
}

export default Card
