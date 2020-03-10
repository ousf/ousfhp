import React from "react"
import styled from "styled-components"

import COLOR from "../../const/color"
import Vol21Pic from "../../../static/images/books/ousf_vol21.png"

import Card from "../card"
import Badge from "../badge"

const Content = styled.div`
  width: 80%;
  display: flex;
`

const BookImage = styled.img`
  width: 40%;
  box-shadow: 0 0 5px ${COLOR.SHADOW_B};
`

const Detail = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  width: 55%;
`

const Title = styled.div`
  font-family: "Noto Sans JP";
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  color: ${COLOR.BLACK};
  font-weight: 500;
  margin: 15px 0;
  line-height: 1.6rem;
`

const Kaishi = () => {
  return (
    <Card title="会誌紹介" linkto="/books">
      <Content>
        <BookImage src={Vol21Pic} />
        <Detail>
          <Badge>C97新刊</Badge>
          <Title>幸福ＳＦ</Title>
        </Detail>
      </Content>
    </Card>
  )
}

export default Kaishi
