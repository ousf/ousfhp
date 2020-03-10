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
  line-height: 1.2rem;
`

const About = () => {
  return (
    <Card title="阪大ＳＦ研とは" linkto="/about">
      <Content>
        　SF研究会は様々な趣味を持つメンバーが所属しています。
        <br />
        　単にSF好きというだけでなく海外SF、国内SF、SFアニメ好き等色々なジャンルに興味を持つ人々がいます。また、部員全員SFに興味津々という訳でもなく「SFは分からないけど○○（例：小説、漫画、アニメ、映画、ボードゲーム、カードゲーム）なら好き」といった人物が多数在籍しています。
        <br />
        　部室には5500冊を超える蔵書や、MtGなど各種カードゲーム、ボードゲームが豊富にあり、授業の合間や昼休み、放課後など好きなとき来てのんびり過ごすことができます。
        <br />
        　「SF詳しくないし……」という方も是非一度部室に来ていただければ趣味の合うメンバーが必ず見つかるはずでしょう。
      </Content>
    </Card>
  )
}

export default About
