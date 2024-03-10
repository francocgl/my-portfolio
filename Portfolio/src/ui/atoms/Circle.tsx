import React, { CSSProperties } from "react"

const Circle = ({ background, top, right }) => {
  const circleStyle: CSSProperties = {
    width: "500px",
    height: "500px",
    opacity: "40%",
    borderRadius: "50%",
    zIndex: "-1",
    position: "absolute",
    top: top,
    right: right,
    background: `radial-gradient(
      circle,
      ${background} -25%,
      rgba(0, 0, 0, 0) 64%
    )`,
  }

  return <div style={circleStyle}></div>
}

export default Circle
