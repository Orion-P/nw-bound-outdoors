import * as React from "react"

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
import g1 from "../../images/g1.webp"
import g2 from "../../images/g2.webp"
import g3 from "../../images/g3.webp"
import g4 from "../../images/g4.webp"
import g5 from "../../images/g5.webp"
import g6 from "../../images/g6.webp"
import g7 from "../../images/g7.webp"
import g8 from "../../images/g8.webp"
import g9 from "../../images/g9.webp"
import g10 from "../../images/g10.webp"
import g11 from "../../images/g11.webp"
import g12 from "../../images/g12.webp"
import g13 from "../../images/g13.webp"
import g14 from "../../images/g14.webp"
import g15 from "../../images/g15.webp"
import g16 from "../../images/g16.webp"
import g17 from "../../images/g17.webp"
import g18 from "../../images/g18.webp"
import g19 from "../../images/g19.webp"
import g20 from "../../images/g20.webp"
import g21 from "../../images/g21.webp"
import g22 from "../../images/g22.webp"
import g23 from "../../images/g23.webp"
import g24 from "../../images/g24.webp"
import g25 from "../../images/g25.webp"
import g26 from "../../images/g26.webp"
import g27 from "../../images/g27.webp"
import g28 from "../../images/g28.webp"
import g30 from "../../images/g30.webp"
import g31 from "../../images/g31.webp"
import g32 from "../../images/g32.webp"

const IndexPage = () => (
  <Layout>
    <div className="gallery-page">
      <div className="color-block">
        <h1>Photo Gallery</h1>
      </div>

      <div className="white-block">
        <ImgSlider img1={g2} img2={g4} img3={g7} />
        <ImgSlider img1={g5} img2={g6} img3={g1} />
        <ImgSlider img1={g10} img2={g11} img3={g12} />
        <ImgSlider img1={g13} img2={g8} img3={g15} />
        <ImgSlider img1={g9} img2={g17} img3={g18} />
        <ImgSlider img1={g16} img2={g20} img3={g21} />
        <ImgSlider img1={g22} img2={g23} img3={g24} />
        <ImgSlider img1={g25} img2={g26} img3={g27} />
        <ImgSlider img1={g28} img2={g30} img3={g31} />
        <ImgSlider img1={g32} img2={g19} img3={chinook} />
       
      </div>
    </div>
  </Layout>
)

export default IndexPage
