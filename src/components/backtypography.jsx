import React from "react"
import styled from "styled-components"
import COLOR from "../const/color"
import mediaQuery from "styled-media-query"

const mediaMobile = mediaQuery.lessThan("medium")

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 100px;
  left: 0;
  ${mediaMobile`
    top: 10vh;
  `}
  & span {
    font-size: 10rem;
    margin: 10px 40px;
    font-family: "Roboto";
    font-weight: 200;
    font-style: italic;
    color: ${COLOR.PRIMARY};
    ${mediaMobile`
      font-size: 7vh;
      line-height: 9vh;
      margin-left: 35px;
    `}
  }
  &::before {
    content: "";
    height: 100%;
    width: 20px;
    background-color: ${COLOR.PRIMARY};
    position: absolute;
    ${mediaMobile`
      width:15px;
    `}
  }
`

const BackTypo = () => {
  return (
    <Wrapper>
      <span>
        Osaka
        <br />
      </span>
      <span>
        Univ
        <br />
      </span>
      <span>
        Sci-Fi
        <br />
      </span>
      <span>
        Club
        <br />
      </span>
    </Wrapper>
  )
}

export default BackTypo
