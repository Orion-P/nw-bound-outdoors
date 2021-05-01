import React from "react"

import Carousel from "@brainhubeu/react-carousel"

import "@brainhubeu/react-carousel/lib/style.css"
import "../styles/ImgSlider.css"

class MyCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Carousel plugins={["arrows", "infinite"]}>
        <img alt={this.props.alt} src={this.props.img1} />
        <img alt={this.props.alt} src={this.props.img2} />
        <img alt={this.props.alt} src={this.props.img3} />
      </Carousel>
    )
  }
}
export default MyCarousel
