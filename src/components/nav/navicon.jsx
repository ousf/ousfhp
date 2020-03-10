import React from "react"
import { motion } from "framer-motion"

import COLOR from "../../const/color"

const Path = props => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={COLOR.PRIMARY}
      strokeLinecap="round"
      {...props}
    />
  )
}

const MenuIcon = props => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        animate={props.isOpen ? "open" : "closed"}
        d=""
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        animate={props.isOpen ? "open" : "closed"}
        d="M 2 9.423 L 20 9.423"
        opacity=""
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={props.isOpen ? "open" : "closed"}
        d=""
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  )
}

export default MenuIcon
