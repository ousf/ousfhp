import React from "react"
import Helmet from "react-helmet"

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
      <Helmet>
        <meta
          name="description"
          content="大阪大学SF研究会のオフィシャルWEBサイトです"
        />
        <meta property="og:title" content="大阪大学SF研究会" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="大阪大学SF研究会のオフィシャルWEBサイトです"
        />
      </Helmet>
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
