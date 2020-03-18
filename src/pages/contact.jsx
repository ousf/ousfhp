import React from "react"
import styled from "styled-components"
import mediaQuery from "styled-media-query"
import Helmet from "react-helmet"

import META from "../const/meta"
import COLOR from "../const/color"

import Card from "../components/card"

import Map01 from "../../static/images/ousfmap07.jpg"
import Map02 from "../../static/images/ousfmap08.jpg"

const mediaMobile = mediaQuery.lessThan("medium")

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
  & img {
    width: 80%;
    margin: 10px 0;
    left: 10%;
    ${mediaMobile`
      width: 100%;`}
  }
`

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>アクセス | {META.siteName}</title>
        <meta property="og:title" content="アクセス" />
      </Helmet>
      <Card
        title="アクセス"
        theme="primary"
        seemoreShow="false"
        barShow="false"
      ></Card>
      <Card seemoreShow="false" barShow="false">
        <Content>
          <h1>連絡先</h1>
          <p>
            メールアドレス： ousf2011@gmail.com
            <br />
            Twitterアカウント：<a href="https://twitter.com/ousf1">@ousf1</a>
          </p>
          <h1>部室（共用室8）までのルート案内</h1>
          <p>
            見学希望の方は事前にtwitter(@ousf1)にDMでアポを取ってください
            <br />
            なお部員は平日の昼にたむろしてることが多いです
          </p>
          <img src={Map01} />
          <p>阪大坂を上がってきて右の建物(広場の横)が学生交流棟</p>
          <img src={Map02} />
          <p>
            1階に食堂(工事中)、2階に学生センターがある
            <br />
            SF研はここの4階共用室8（の4分の1）
            <br />
            エレベーターで4階まで上がって左折2回で共用室8に
            <br />
            ナンバーロックがかかってるので御用の方はノックしてね
            <br />
          </p>
        </Content>
      </Card>
    </div>
  )
}

export default ContactPage
