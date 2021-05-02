import * as React from "react"
import { Link } from "gatsby"

import ImgSlider from "../../components/ImgSlider"
import Layout from "../../components/Layout"
// import SEO from "../components/SEO"//

import "../../styles/Gallery.css"

import steelhead1 from "../../images/wintersteelhead1.webp"
import steelhead2 from "../../images/wintersteelhead2.webp"
import steelhead3 from "../../images/wintersteelhead3.webp"
import chinook from "../../images/springchinook8.webp"
import chinook1 from "../../images/springchinook1.webp"
import chinook2 from "../../images/springchinook5.webp"
import walleye from "../../images/walleye.webp"
import walleye1 from "../../images/walleye1.webp"
import walleye3 from "../../images/walleye3.webp"

const IndexPage = () => (
  <Layout>
    <div className="gallery-page">
      <div className="color-block">
        <h1>Photo Gallery</h1>
      </div>

      <div className="white-block">
        <ImgSlider img1={steelhead1} img2={steelhead2} img3={steelhead3} />
        <ImgSlider
          alt="winter steelhead fish"
          img1={chinook}
          img2={chinook1}
          img3={chinook2}
        />
        <ImgSlider
          alt="winter steelhead fish"
          img1={walleye}
          img2={walleye1}
          img3={walleye3}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
