import * as React from "react"

import ImgSlider from "../../components/ImgSlider"
import Layout from "../../components/Layout"
// import SEO from "../components/SEO"

import "../../styles/FishingSeason.css"

import steelhead1 from "../../images/wintersteelhead1.webp"
import steelhead2 from "../../images/wintersteelhead2.webp"
import steelhead3 from "../../images/wintersteelhead3.webp"
import chinook from "../../images/springchinook8.webp"
import chinook1 from "../../images/springchinook1.webp"
import chinook2 from "../../images/springchinook5.webp"
import sturgeon from "../../images/sturgeon.webp"
import sturgeon2 from "../../images/sturgeon2.webp"
import sturgeon3 from "../../images/sturgeon3.webp"
import walleye from "../../images/walleye.webp"
import walleye1 from "../../images/walleye1.webp"
import walleye3 from "../../images/walleye3.webp"

const IndexPage = () => (
  <Layout>
    <div className="fishing-season-page">
      <div className="color-block">
        <h1>Oregon Spring Fishing</h1>
      </div>

      <div>
        <h2 class="month">March</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3 className="above-caro-space-fix"> Winter Steelhead</h3>
            <ImgSlider
              alt="winter steelhead fish"
              img1={steelhead3}
              img2={steelhead1}
              img3={steelhead2}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              These fish are usually bigger than the summer steelhead and can be
              up to 44 inches in length. Steelhead provide the most valued year
              round fishing in the Northwest.
            </p>
          </div>
        </div>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3 className="above-caro-space-fix">Spring Chinook</h3>
            <ImgSlider
              alt="spring chinook fish"
              img1={chinook2}
              img2={chinook}
              img3={chinook1}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              Chinook salmon are one of the Pacific salmon species and can be up
              to 50 lbs, although 10-25 is more common. The spring Chinook
              salmon is the best tasting salmon you’ll eat.
            </p>
          </div>
        </div>

        <div className="white-block no-bottom-white-space">
          <div>
            <h3 className="above-caro-space-fix">Sturgeon</h3>
            <ImgSlider
              alt="sturgeon"
              img1={sturgeon}
              img2={sturgeon2}
              img3={sturgeon3}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              These fish are the powerhouse of the water, they fight harder than
              any other fish in the Northwest. Measuring at 2 - 10 feet in
              length Sturgeon can only be caught and kept a few days a year, the
              rest of the year is just catch and release.
            </p>
          </div>
        </div>

        <div className="white-block">
          <div>
            <h3 className="above-caro-space-fix">Walleye</h3>
            <ImgSlider
              alt="walleye fish"
              img1={walleye}
              img2={walleye1}
              img3={walleye3}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              Also known as the yellow pike are a Native fish to the Northwest.
              These white meat fish are an excellent source of protein. They can
              weigh 2-5 pounds on average but can be up to 15 pounds.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="month">April & May</h2>
        <div className="white-block">
          <h3>See Spring Chinook & Walleye Above</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
