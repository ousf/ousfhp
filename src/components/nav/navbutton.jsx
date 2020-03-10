import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import COLOR from "../../const/color"

import Icon from "./navicon"

const Wrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  box-shadow: 5px 5px 10px ${COLOR.SHADOW_B}, -5px -5px 10px ${COLOR.SHADOW_W};
  border-radius: 30px;
  background-color: ${COLOR.BASE};
  position: fixed;
  z-index: 6;
  bottom: 30px;
  left: 30px;
  overflow: hidden;
  color: ${COLOR.PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 1.3rem;
  box-sizing: border-box;
`
const variants = {
  open: {
    scale: 70,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const NavButton = props => {
  return (
    <div>
      <Wrapper
        style={{
          boxShadow: "none",
          backgroundColor: "none",
          pointerEvents: "fill",
        }}
        onClick={props.toggleOpen}
      >
        <Icon isOpen={props.isOpen} />
      </Wrapper>
      <Wrapper
        animate={props.isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "anticipate" }}
        style={{ zIndex: 5, pointerEvents: "none" }}
      ></Wrapper>
    </div>
  )
}

export default NavButton
