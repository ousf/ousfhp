import React, { useState } from "react"
import styled from "styled-components"

import NavButton from "./navbutton"
import NavContents from "./navcontents"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  position: fixed;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
`

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <NavButton toggleOpen={toggleOpen} isOpen={isOpen} />
      <NavContents toggleOpen={toggleOpen} isOpen={isOpen} />
    </Container>
  )
}

export default Nav
