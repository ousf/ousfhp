import React from "react"
import Layout from "./src/components/layout"

export const wrapPageElement = () => {
  return <Layout {...props}>{element}</Layout>
}
