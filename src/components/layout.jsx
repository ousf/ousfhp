import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import BackTypo from "../components/backtypography"

import Nav from "../components/nav/nav"

const Contents = styled.div`
  z-index: 2;
  position: absolute;
  left: calc(50vw - 250px);
`

const variants = {
  initial: {
    opacity: 0,
    //x: "-500px",
  },
  enter: {
    //x: "0px",
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    //x: "500px",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const Layout = props => {
  return (
    <div>
      <Nav />
      <AnimatePresence>
        <motion.main
          key={props.location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Contents>{props.children}</Contents>
        </motion.main>
      </AnimatePresence>
      <BackTypo />
    </div>
  )
}

export default Layout
