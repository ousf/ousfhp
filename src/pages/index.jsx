import React from "react"

import Notice from "../components/top/notice"
import About from "../components/top/about"
import Kaishi from "../components/top/kaishi"
import KaishiMobile from "../components/top/kaishimobile"
import Ousf from "../components/top/ousf"
import Welcome from "../components/top/welcome"
import withMediaComponent from "../components/withMediaComponent"
import Access from "../components/top/access"
import Links from "../components/top/links"

const BookItem = withMediaComponent(Kaishi, KaishiMobile)

const TopPage = ({ data, location }) => {
  return (
    <div>
      <Welcome />
      <About />
      <Notice />
      <BookItem />
      <Access />
      <Links />
      <Ousf />
    </div>
  )
}

export default TopPage
