import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import COLOR from "../../const/color"

import MenuButton from "./menubutton"
import Logo from "../ousf_logo"

const Wrapper = styled.div`
  z-index: 6;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`
const LogoWrapper = styled(motion.div)`
  width: 400px;
  margin: 40px;
  margin-bottom: 40px;
`
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LinkT = styled(Link)`
  text-decoration: none;
  color: ${COLOR.PRIMARY};
`

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const variants2 = {
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

const NavContents = props => {
  return (
    <Wrapper>
      <Container
        initial={false}
        animate={props.isOpen ? "open" : "closed"}
        variants={variants}
      >
        <LogoWrapper variants={variants2}>
          <Logo />
        </LogoWrapper>

        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/" onClick={props.toggleOpen}>
            TOP
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/about" onClick={props.toggleOpen}>
            ABOUT
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/posts" onClick={props.toggleOpen}>
            POSTS
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/books" onClick={props.toggleOpen}>
            BOOKS
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/contact" onClick={props.toggleOpen}>
            CONTACT
          </LinkT>
        </MenuButton>
      </Container>
    </Wrapper>
  )
}

export default NavContents
