import React from "react"
import styled from "styled-components"
import COLOR from "../const/color"

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 100px;
  left: 0;
  & span {
    font-size: 10rem;
    margin: 10px 40px;
    font-family: "Roboto";
    font-weight: 200;
    font-style: italic;
    color: ${COLOR.PRIMARY};
  }
  &::before {
    content: "";
    height: 100%;
    width: 20px;
    background-color: ${COLOR.PRIMARY};
    position: absolute;
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
