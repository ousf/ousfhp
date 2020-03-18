import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { generateMedia } from "styled-media-query"
import Helmet from "react-helmet"
import mediaQuery from "styled-media-query"

import META from "../const/meta"

import BackTypo from "../components/backtypography"
import Nav from "../components/nav/nav"

import LogoImg from "../../static/logo1.jpg"

const customMedia = generateMedia({
  mobile: "1000px",
})

const mediaMobile = mediaQuery.lessThan("medium")

const Contents = styled.div`
  z-index: 2;
  position: absolute;
  ${customMedia.lessThan("mobile")`
  left: 5vw;
    `}
  ${customMedia.greaterThan("mobile")`
  left: calc(50vw - 450px);`}
  ${props => {
    if (props.location === "/") {
      return mediaMobile`
          top: 45vh;
        `
    }
  }}
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

const Spacer = styled.div`
  width: 100%;
  height: 50px;
`

const Layout = props => {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "ja",
        }}
      >
        <meta name="robots" content="noindex,nofollow" />
        <title>{META.siteName}</title>
        <meta
          property="og:url"
          content={"https://ousf-dev.netlify.com" + props.location.pathname}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={META.siteName} />
        <meta property="og:image" content={LogoImg} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={props.location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Contents location={props.location.pathname}>
            {props.children}
            <Spacer />
          </Contents>
        </motion.main>
      </AnimatePresence>
      <BackTypo />
    </div>
  )
}

export default Layout
