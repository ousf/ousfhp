import React from "react"
import styled from "styled-components"

import COLOR from "../../const/color"

import Card from "../card"
import Button from "../button"

const Content = styled.div`
  font-family: "Noto Sans JP";
  color: ${COLOR.BLACK};
  box-sizing: border-box;
  width: 80%;
  font-size: 0.9rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Aex = styled.a`
  text-decoration: none;
  margin: 5px;
`

const Link = props => {
  return (
    <Aex href={props.href}>
      <Button {...props}>{props.children}</Button>
    </Aex>
  )
}

const Links = () => {
  return (
    <Card title="リンク集" seemoreShow>
      <Content>
        <Link href="https://twitter.com/ousf1">Twitter</Link>
        <Link href="https://ousf.booth.pm">BOOTH</Link>
        <Link href="https://www.melonbooks.co.jp/circle/index.php?circle_id=33104">
          メロンブックス
        </Link>
        <Link href="https://w.atwiki.jp/ousf/">阪大ＳＦ研旧サイト</Link>
      </Content>
    </Card>
  )
}

export default Links
