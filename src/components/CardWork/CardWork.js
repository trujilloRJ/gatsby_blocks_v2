import React from "react"
import cardStyles from "./CardWork.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function CardWork({ props, children }) {
  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.card__brand}>{children}</div>
        <div className={cardStyles.card__text}>{props.text}</div>
        <div className={cardStyles.card__btn_list}>
          <div className={cardStyles.card__btn}>
            <a href={props.linkCode}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className={cardStyles.card__btn}>
            <a href={props.linkWeb}>
              <FontAwesomeIcon icon={faGlobe} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
