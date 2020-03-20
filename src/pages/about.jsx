import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import COLOR from "../const/color"
import META from "../const/meta"

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
      <Helmet>
        <title>阪大SF研について | {META.siteName}</title>
        <meta property="og:title" content="阪大SF研について" />
      </Helmet>
      <Card
        title="阪大ＳＦ研とは"
        theme="primary"
        seemoreShow="false"
        barShow="false"
      ></Card>
      <Card titleShow="false" barShow="false" seemoreShow="false">
        <Content>
          <h1>このページは何？</h1>
          <p>
            　ようこそおいでくださいました。ここは大阪大学SF研究会のバーチャル部室、という体で情報発信を行う公式ホームページになります。
          </p>
          <h1>SF研ってどんなサークル？</h1>
          <p>
            　大阪大学SF研究会は、その名の通り大阪大学でサイエンスフィクションの研究をやっている大学公認団体、ということになっていますが、その実は単にSFにとどまることなく漫画、アニメ、映画にゲームなど様々なジャンルに興味を持つオタク達が「SF」という共通項によって集まった、「総合オタクサークル」とでも呼ぶべきものになっています。
          </p>
          <h1>SF研って何をやってるの？</h1>
          <p>
            　全員で大々的に行う活動としては、古今東西のSF(だけでもないですが)作品を扱う読書会や鑑賞会、SF作品のレビュー・考察をまとめた会誌の発行(会誌についての詳細は「会誌紹介」のページをご覧ください)が挙げられますが、これらの活動をするサークルというよりは、むしろ好きなときに部室に立ち寄って本を読んだり映画を見たり、コーヒーを啜ったりして過ごすサークルと言ったほうが実態に即していると思います。
          </p>
          <h1>部室ってどんなところなの？</h1>
          <p>
            　部室には5500冊(要出典、把握しきれてないですがもっと多いと思われます)の蔵書を始めとして、各種再生設備とスクリーン、ボードゲームや飲み物、お菓子などが豊富に存在しており、阪大の中でも指折りの快適空間となっています。少し古い例えになりますが、「本の密度を数倍に高めたSOS団の部室」を想像していただければ良いと思います。部室のある学生交流棟が開いている間は、会員全員が自由に使うことができます。
          </p>
          <h1>SF研に興味がある！行ってみたい！！</h1>
          <p>
            　よくぞ言ってくれました！是非遊びに来てください！「SFのオタクって怖い人が多いしなあ」という心配は無用です！！我々のスタンスとして、これがSFだという定義にこだわることなく「うんうん　それもまたSFだね」の精神で、各々の見つけたすこし不思議を大事にしていきたい、というものがあります。ですので、「俺のSFを見てくれ！」というSF好きの方はもちろん、「SFはあまり詳しくないし適当なこと言ったら殺されるんじゃ……」という方も、まずは一度昼休みなり放課後なりに学生交流棟、共用室8のドアをノックしてみてください。きっと趣味を同じくするオタクが見つかると思います。(部室の場所は「アクセス」のページを参考にしてください、アポは取ったほうがよいです)
          </p>
        </Content>
      </Card>
    </div>
  )
}

export default AboutPage
