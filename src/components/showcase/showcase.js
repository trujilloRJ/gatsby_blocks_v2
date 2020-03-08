import React from "react"
import scStyles from "./showcase.module.scss"
import Brand from "../SVG/Brand"

export default function Showcase() {
  return (
    <>
      <div className={scStyles.showcase}>
        <div className={scStyles.showcase__overlay}>
          <div className={scStyles.showcase__brand}>
            <Brand />
          </div>
          <div className={scStyles.showcase__slogan}>
            "Rebuilding the web with better bricks"
          </div>
          <div className={scStyles.showcase__cta}>Learn More</div>
        </div>
      </div>
    </>
  )
}
