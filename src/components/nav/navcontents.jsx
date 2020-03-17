import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import mediaQuery from "styled-media-query"

import COLOR from "../../const/color"

import MenuButton from "./menubutton"
import Logo from "../ousf_logo"

const mediaMobile = mediaQuery.lessThan("large")

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
  margin: 40px;
  margin-bottom: 4vh;
  box-sizing: border-box;
  width: 40vh;
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
            トップ
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/about" onClick={props.toggleOpen}>
            阪大ＳＦ研とは
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/posts" onClick={props.toggleOpen}>
            おしらせ
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/books" onClick={props.toggleOpen}>
            会誌紹介
          </LinkT>
        </MenuButton>
        <MenuButton isOpen={props.isOpen}>
          <LinkT to="/contact" onClick={props.toggleOpen}>
            アクセス
          </LinkT>
        </MenuButton>
      </Container>
    </Wrapper>
  )
}

export default NavContents
