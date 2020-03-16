import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import COLOR from "../const/color"
import UI from "../const/ui"

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

const Wrapper = styled(motion.div)`
  width: auto;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px;
  background-color: ${COLOR.BASE};
  box-shadow: ${UI.SHADOW.Dark} ${COLOR.SHADOW_B},
    ${UI.SHADOW.Light} ${COLOR.SHADOW_W};
  border-radius: 10px;
  text-align: center;
  transition-duration: 150ms;
  &:hover {
    box-shadow: ${UI.SHADOW.Dark} ${COLOR.SHADOW_B},
      ${UI.SHADOW.Light} ${COLOR.SHADOW_W};
    transform: scale(1.05);
    transition-duration: 150ms;
  }
`
Wrapper.defaultProps = {
  textcolor: COLOR.PRIMARY,
}

const Content = styled.span`
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Roboto";
  color: ${props => handleColorTypeText(props.theme, props.textcolor)};
  font-weight: 300;
`
Content.defaultProps = {
  textcolor: COLOR.PRIMARY,
}

const Button = props => {
  return (
    <Wrapper whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Content textcolor={props.textcolor} theme={props.theme}>
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default Button
