import React from "react"

import Layout from "../components/layout"
import Notice from "../components/top/notice"
import About from "../components/top/about"
import Kaishi from "../components/top/kaishi"
import Ousf from "../components/top/ousf"
import Welcome from "../components/top/welcome"

const TopPage = ({ data, location }) => {
  return (
    <div>
      <Welcome />
      <Notice />
      <About />
      <Kaishi />
      <Ousf />
    </div>
  )
}

export default TopPage
