import React from "react"
import cardStyles from "./Card.module.scss"

export default function Card({ props, children }) {
  const card_img = {
    background: props.img,
  }
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.card__img} style={card_img}></div>
      <div className={cardStyles.card__icon}>
        <i className={props.faIcon}></i>
      </div>
      <div className={cardStyles.card__title}>{props.headline}</div>
      <div className={cardStyles.card__desc}>{children}</div>
    </div>
  )
}
