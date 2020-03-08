import React, { useState, useEffect } from "react"
import styles from "./ImgSlider.module.scss"
import LeftArrow from "../SVG/Left_arrow"
import RightArrow from "../SVG/Right_arrow"

export default function ImgSlider({ props }) {
  const num_img = props.img_list.length
  const [imgIndex, setImgIndex] = useState(0)

  if (props.type === "translate") {
    var img_opacity = new Array(num_img).fill(1)
    var translateTransitionTime = "500ms"
  } else if (props.type === "fade") {
    var img_opacity = new Array(num_img).fill(0)
    img_opacity[imgIndex] = 1
    var translateTransitionTime = "0ms"
  }

  const indBgColor = new Array(num_img).fill("transparent")
  indBgColor[imgIndex] = "#ffffff"

  function nextImg() {
    if (imgIndex >= num_img - 1) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
    }
  }
  //   function prevImg() {
  //     if (imgIndex <= 0) {
  //       setImgIndex(num_img - 1)
  //     } else {
  //       setImgIndex(imgIndex - 1)
  //     }
  //   }

  useEffect(() => {
    const interval = setInterval(nextImg, props.automatedTime)
    return () => clearInterval(interval)
  }, [imgIndex])

  const styleSlider = {
    width: `${num_img * 100}%`,
    transform: `translateX(${(-imgIndex * 100) / num_img}%)`,
    transition: `transform ${translateTransitionTime} ease-out`,
  }

  return (
    <>
      <div className={styles.slider__container}>
        <div className={styles.slider} style={styleSlider}>
          {props.img_list.map((e, i) => (
            <Slide
              key={e.caption}
              img={e.img}
              style={{ opacity: img_opacity[i] }}
            />
          ))}
        </div>
        <div className={styles.slider__indicators}>
          {props.img_list.map((e, i) => (
            <Indicator
              key={e.id}
              bg_color={indBgColor[i]}
              value={e.id}
              onClick={e => {
                setImgIndex(e)
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Indicator({ bg_color, value, onClick }) {
  function handleClick(e) {
    onClick(e.target.value - 1)
  }
  return (
    <>
      <button
        className={styles.slider__ind}
        style={{ background: bg_color }}
        value={value}
        onClick={handleClick}
      ></button>
    </>
  )
}

function Slide({ img, style }) {
  return (
    <>
      <div className={styles.slider__slide}>
        <img src={img} alt="" style={style} />
      </div>
    </>
  )
}
