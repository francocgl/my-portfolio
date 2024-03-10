import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

export const useLocoScroll = () => {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll()
  }, [])
}
