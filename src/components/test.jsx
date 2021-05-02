import React from "react"

import Carousel from "@brainhubeu/react-carousel"

import "@brainhubeu/react-carousel/lib/style.css"
import "../styles/ImgSlider.css"

const ImgSlider = props => {
  return (
    <Carousel plugins={["arrows", "infinite"]}>
      <img alt={props.alt} src={props.img1} />
      <img alt={props.alt} src={props.img2} />
      <img alt={props.alt} src={props.img3} />
    </Carousel>
  )
}
export default ImgSlider