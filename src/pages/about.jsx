import React from "react"

import COLOR from "../const/color"

import Card from "../components/card"

const AboutPage = () => {
  return (
    <div>
      <Card
        title="阪大ＳＦ研とは"
        theme="primary"
        seemoreShow="false"
        barShow="false"
      ></Card>
      <Card titleShow="false" barShow="false" seemoreShow="false"></Card>
    </div>
  )
}

export default AboutPage
