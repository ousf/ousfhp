import React from "react"
import styled from "styled-components"

import COLOR from "../../const/color"

import Card from "../card"

const Content = styled.div`
  font-family: "Noto Sans JP";
  color: ${COLOR.BLACK};
  box-sizing: border-box;
  width: 80%;
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: center;
`

const Access = () => {
  return (
    <Card title="アクセス" linkto="/contact">
      <Content>　 ＳＦ研へのアクセス・お問い合わせはこちらから</Content>
    </Card>
  )
}

export default Access
