import "./src/styles/cssreset.css"
import "./src/styles/global.css"

window.getComputedStyle = (...args) => {
  console.log("TEST")
  console.log(...args)
  window.getComputedStyle(...args)
}
