import React from "react"
import sStyles from "./section.module.scss"

export default function Section({ props, children }) {
  return (
    <div
      id={props.idSection}
      className={[sStyles.section, props.classList].join(" ")}
    >
      <div className={sStyles.section__container}>
        <div className={sStyles.section__heading}>
          <h2>{props.headline}</h2>
        </div>
        {children}
      </div>
    </div>
  )
}
