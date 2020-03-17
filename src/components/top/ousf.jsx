import React from "react"
import styled from "styled-components"

import Card from "../card"
import COLOR from "../../const/color"

const License = styled.span`
  color: ${COLOR.BASE};
  font-family: "Noto Sans JP";
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
`

const Ousf = () => {
  return (
    <Card titleShow barShow theme="reverse" seemoreShow="False">
      <License>© 2020 大阪大学ＳＦ研究会</License>
    </Card>
  )
}

export default Ousf
