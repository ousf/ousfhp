import React from "react"
import styled from "styled-components"

import COLOR from "../const/color"
import UI from "../const/UI"

const Wrapper = styled.div`
  width: 100px;
  box-sizing: border-box;
  padding: 10px;
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
const Content = styled.span`
  font-size: 0.9rem;
  font-family: "Roboto";
  color: ${COLOR.PRIMARY};
  font-weight: 300;
`

const SeeMore = () => {
  return (
    <Wrapper>
      <Content>SEE MORE</Content>
    </Wrapper>
  )
}

export default SeeMore
