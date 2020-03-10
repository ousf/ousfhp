import React from "react"

import Notice from "../components/top/notice"
import About from "../components/top/about"
import Kaishi from "../components/top/kaishi"
import Ousf from "../components/top/ousf"
import Welcome from "../components/top/welcome"

const TopPage = () => {
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
