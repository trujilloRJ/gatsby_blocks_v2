import React from "react"
import cardStyles from "./CardTeam.module.scss"

export default function CardTeam({ props, children }) {
  const card_img = {
    background: props.img,
  }
  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.card__main}>
          <div className={cardStyles.card__face} style={card_img}></div>
          <div className={cardStyles.card__name}>{props.name}</div>
          <div className={cardStyles.card__desc}>{children}</div>
        </div>
      </div>
    </>
  )
}
