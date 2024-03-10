import React, { useState, useEffect } from "react"

interface windowSize {
  width: number
  height: number
}

const useWindowSize = (): windowSize => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // Function to update windowSize whenever the window is resized
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add an event listener to the window to handle resizing
    window.addEventListener("resize", handleResize)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // The empty array ensures that this effect runs once after mounting

  return windowSize
}

export default useWindowSize
