import React from "react"
import styled from "styled-components"

import COLOR from "../../const/color"

import Card from "../card"

const Content = styled.div`
  font-family: "Noto Sans JP";
  color: ${COLOR.BASE};
  box-sizing: border-box;
  width: 80%;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-align: center;
`

const Welcome = () => {
  return (
    <Card title="ようこそ" theme="primary" seemoreShow="False">
      <Content>
        こちらは大阪大学ＳＦ研究会のヴァーチャル部室です。
        <br />
        どうぞごゆるりとお寛ぎ下さい。
      </Content>
    </Card>
  )
}

export default Welcome
