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
`

const About = () => {
  return (
    <Card title="阪大ＳＦ研とは" linkto="/about">
      <Content>
        　大阪大学SF研究会は、主にサイエンス・フィクションの研究を行うことを目的とする大阪大学公認団体です。様々な趣味を持つメンバーが、本にまみれた部室で過ごしています。
        <br />
        　我々の主な活動としては、会誌の作成であったり、読書会・上映会が挙げられます。「SF研究会」の名を掲げているのでSFだけをやっていると思われがちなのですが、部室の本棚にはSFとは言えないような本が多数存在しており、SFだけに囚われることなく様々なコンテンツを扱っています。このような大きな活動だけではなく、暇な会員が部室に集まってテキトーに映画を流したり、飲み物片手に駄弁ったりと気ままに活動しています。
        <br />
        　SFに興味のある方であればだれでも歓迎ですので、このページを見つけたのもなにかの縁ですし一度遊びに来てくださると嬉しいです。SF研はあなたの来訪を特に待ちはしませんが受け入れます。
      </Content>
    </Card>
  )
}

export default About
