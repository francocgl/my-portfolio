import React, { type ReactElement } from "react"
import { motion } from "framer-motion"
import useWindowSize from "../../../hooks/useWindowSize"
import type { MenuLinks } from "../../../typings/MenuLinks"
import MobileNav from "./MobileNav"

interface NavbarProps {
  menu: MenuLinks[]
}

const Navbar = ({ menu }: NavbarProps): ReactElement => {
  const { isMobile } = useWindowSize()
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.2 * index },
    }),
  }

  if (isMobile) {
    return <MobileNav menu={menu} />
  }

  return (
    <nav className="grid-container no-margin absolute top-5 right-0 left-0 flex justify-between text-black">
      <div className="col-start-2 overflow-hidden">
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="hidden lg:block text-xl text-secondary"
          variants={navVariants}
        >
          Digital Designer
        </motion.p>
      </div>
      <div className="col-start-3">
        <ul className="flex justify-between overflow-hidden ">
          {menu.map((item, index) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              key={index}
              custom={index}
              variants={navVariants}
            >
              <a
                href={item.link}
                data-scroll-href={item.link}
                data-scroll-to
                data-scroll-to-duration="2"
                className="text-xl font-normal underline hover:text-secondary"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
