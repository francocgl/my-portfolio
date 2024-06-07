import React, { useState, useEffect } from "react"

interface windowSize {
  windowSize: { width: number; height: number }
  isMobile: boolean
}

const useWindowSize = (): windowSize => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const isMobile = windowSize.width < 478

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { windowSize, isMobile }
}

export default useWindowSize
