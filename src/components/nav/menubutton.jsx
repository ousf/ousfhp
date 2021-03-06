import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import mediaQuery from "styled-media-query"

import COLOR from "../../const/color"

const mediaMobile = mediaQuery.lessThan("large")

const Wrapper = styled(motion.span)`
  color: ${COLOR.PRIMARY};
  font-size: 3rem;
  font-family: "Roboto";
  font-weight: 100;
  margin: 30px;
  pointer-events: fill;
  margin-right: 0.7rem;
  a {
    font-family: "Noto Sans JP", "Roboto";
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.7rem;
    ${mediaMobile`
    font-size: 3.5vh;
  `}
  }
  ${mediaMobile`
    margin: 3vh;
    font-size: 5vh;
    margin-right: 0.7rem;
  `}
`

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuButton = props => {
  return (
    <Wrapper
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: props.isOpen ? "fill" : "none" }}
    >
      {props.children}
    </Wrapper>
  )
}

export default MenuButton
