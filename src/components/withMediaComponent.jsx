import React from "react"
import Media from "react-media"
import MediaQuery from "react-responsive"

const withMediaComponent = (DesktopComponent, MobileComponent) => {
  return props => {
    return (
      // <Media query="(max-width: 768px)">
      //   {matches =>
      //     matches ? (
      //       <MobileComponent {...props} />
      //     ) : (
      //       <DesktopComponent {...props} />
      //     )
      //   }
      // </Media>
      <div>
        <MediaQuery query="(max-width: 768px)">
          <MobileComponent {...props} />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <DesktopComponent {...props} />
        </MediaQuery>
      </div>
    )
  }
}

export default withMediaComponent
