import React from "react"
import styled from "styled-components"

import COLOR from "../const/color"

import Layout from "../components/layout"
import Card from "../components/card"

const Content = styled.div`
  margin-right: auto;
  box-sizing: border-box;
  padding: 20px;
  color: ${COLOR.BLACK};
  font-family: "Noto Sans JP";
  & h1 {
    font-size: 1.4rem;
    margin: 20px 0 20px 0;
    padding-left: 15px;
    box-sizing: border-box;
    font-weight: 600;
    position: relative;
    &::before {
      content: "";
      width: 5px;
      height: 100%;
      background-color: ${COLOR.PRIMARY};
      position: absolute;
      left: 0;
      top: 0.05rem;
    }
  }
  & p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`
const AboutPage = ({ location }) => {
  return (
    <div>
      <Card
        title="阪大ＳＦ研とは"
        theme="primary"
        seemoreShow="false"
        barShow="false"
      ></Card>
      <Card titleShow="false" barShow="false" seemoreShow="false">
        <Content>
          <h1>初めてこのページにいらっしゃったお客様へ</h1>
          <p>
            　まずは、ようこそこのカオス空間においで下さいました。
            <br />
            　このwikiは題字の通りの大阪大学にございます「SF研究会（えすえふけんきゅうかい）」の情報発信の場となっております。
          </p>
          <h1>SF研ってどんなところ</h1>
          <p>
            　SFを真面目に研究するだけの研究会と思われるかも知れませんが、適当に皆で遊ぼうよという趣旨の元、日々活動を行っております。
            <br />
            　もちろんガッツリSFやりたいんですという人間も当然いるし、SFっぽい読書会（ジャンル問わず「君が読ませたい本を読ませればいいよ」というスタンスなので本当に多種多様な本が登場します）等も定期的に開催しております。
          </p>
          <h1>SF研での過ごし方</h1>
          <p>
            　SFに限らず、ありとあらゆるろくでもないことに全力で注力することに定評のあるSF研ですが、普段の活動はと言えば、座って漫画や小説を読んだり、人が集まってボードゲームやカードゲームを楽しんだり･･･何をやるのも自由、フリーです。
          </p>
          <h1>SF研の所在地</h1>
          <p>
            　ここまで来てほんの少しでもSF研に興味を持ったぜという手遅れな紳士淑女はぜひ一度部室にいらっしゃってください。場所は豊中キャンパス、学生交流棟4階共用室8(の一番奥)です。
            <br />
            　SF研の信条の一つに｢来るものは拒まず、行くものは追わず」というものがあります。好きな時にふらっと現れていつ授業に行ってるのかも定かでない部員どもに「暇を潰しに来ました！」と言えば何がしか相手をしてくれます。
          </p>
        </Content>
      </Card>
    </div>
  )
}

export default AboutPage
