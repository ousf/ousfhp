import "./src/styles/cssreset.css"
import "./src/styles/global.css"

import React from "react"

import Layout from "./src/components/layout.jsx"

window.getComputedStyle = (...args) => {
  console.log(...args)
  window.getComputedStyle(...args)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}