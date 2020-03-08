import { Link } from "gatsby"
import React, { useState } from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const [menuClose, setMenuClose] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  function toggleMenu() {
    setMenuClose(!menuClose)
  }

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <>
      <header
        className={[
          headerStyles.header,
          scrolled ? headerStyles.scrolled : "",
        ].join(" ")}
      >
        <div className={headerStyles.header__container}>
          <div className={headerStyles.header__hero}>
            <Link className="link" to="/">
              {siteTitle}
            </Link>
          </div>
          <div className={headerStyles.header__nav}>
            <ul>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="link" to="/more">
                  More
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={[
              headerStyles.header__burguer,
              menuClose ? headerStyles.close : "",
            ].join(" ")}
            onClick={toggleMenu}
          >
            <div className={headerStyles.line1}></div>
            <div className={headerStyles.line2}></div>
            <div className={headerStyles.line3}></div>
          </div>
        </div>
      </header>
      <div
        className={[
          headerStyles.mobnav,
          menuClose ? headerStyles.show : "",
        ].join(" ")}
      >
        <ul>
          <li>
            <Link onClick={toggleMenu} className="link" to="/page-2">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="link" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="link" to="/more">
              More
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
