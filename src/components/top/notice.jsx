import React from "react"
//import styled from "styled-components"

import Item from "./noticeitem"
import Card from "../card"

const Notice = () => {
  return (
    // <Wrapper>
    //   <Title>おしらせ</Title>
    //   <Bar />
    //   <Item date="2020.02.02" title="記事のタイトル記事のタイトル" />
    //   <Item
    //     date="2020.02.02"
    //     title="記事のタイトル記事のタイトル記事のタイトル記事のタイトル"
    //   />
    //   <SeeMoreWrapper>
    //     <SeeMore />
    //   </SeeMoreWrapper>
    // </Wrapper>
    <Card title="おしらせ" linkto="/posts">
      <Item date="2020.02.02" title="記事のタイトル記事のタイトル" />
      <Item
        date="2020.02.02"
        title="記事のタイトル記事のタイトル記事のタイトル記事のタイトル"
      />
    </Card>
  )
}

export default Notice
