import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"

const MobileNav = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (isOpen) => {
    const body = document.body

    if (isOpen) {
      body.classList.add("no-scroll")
    } else {
      body.classList.remove("no-scroll")
    }

    setIsMenuOpen(isOpen)
  }

  return (
    <>
      <nav className="absolute top-5 right-0 text-black">
        <button onClick={() => handleMenuClick(true)}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="bg-black fixed top-0 w-full h-screen p-5 z-10">
          <div className="flex justify-end mb-5">
            <button onClick={() => handleMenuClick(false)}>
              <FontAwesomeIcon
                icon={faClose}
                className="text-3xl text-secondary"
              />
            </button>
          </div>
          <ul className="flex flex-col justify-between overflow-hidden">
            {menu.map((item, index) => (
              <li
                key={index}
                className="pt-10   pb-10  "
                onClick={() => handleMenuClick(false)}
              >
                <a href={item.link} className="text-5xl font-normal underline">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default MobileNav
