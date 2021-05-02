import * as React from "react"

import ImgSlider from "../../components/ImgSlider"
import Layout from "../../components/Layout"
// import SEO from "../components/SEO"

import "../../styles/FishingSeason.css"

import chinook from "../../images/springchinook8.webp"
import chinook1 from "../../images/springchinook1.webp"
import chinook2 from "../../images/springchinook5.webp"
import sturgeon from "../../images/sturgeon.webp"
import coho from "../../images/coho.webp"
import coho1 from "../../images/coho1.webp"
import coho2 from "../../images/coho2.webp"
import crab from "../../images/crab.webp"
import crab1 from "../../images/crab1.webp"
import crab2 from "../../images/crab2.webp"

const IndexPage = () => (
  <Layout>
    <div className="fishing-season-page">
      <div>
        <div className="color-block">
          <h1>Oregon Fall Fishing</h1>
        </div>
        <h2 class="month">September & October</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3 className="above-caro-space-fix">Crab</h3>
            <ImgSlider
              alt="crabs"
              img1={crab}
              img2={crab1}
              img3={crab2}
            ></ImgSlider>
            <p className="below-caro-space-fix">TODO</p>
          </div>
        </div>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3 className="above-caro-space-fix">Fall Chinook</h3>
            <ImgSlider
              alt="fall chinook fish"
              img1={chinook2}
              img2={chinook}
              img3={chinook1}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              Fall Chinook salmon are the largest of all salmon we fish for in
              Oregon. Catching a 30 plus pound Fall Chinook is not uncommon.
              These are also great tasting fish to eat and with the beautiful
              fall weather makes for an awesome day of fishing.
            </p>
          </div>
        </div>
        <div className="white-block">
          <div>
            <h3 className="above-caro-space-fix">Coho</h3>
            <ImgSlider
              alt="coho fish"
              img1={coho}
              img2={coho1}
              img3={coho2}
            ></ImgSlider>
            <p className="below-caro-space-fix">
              These fish are also known as silvers and weigh about 8-12 pounds,
              24-30 inches long. Coho salmon are a rich reddish orange meat and
              are very tasty much like the Spring Chinook Salmon.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="month">November</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3>Sturgeon</h3>
            <img
              alt="sturgeon fish"
              className="individual-img sturgeon"
              src={sturgeon}
            />
            <p>
              These fish are the powerhouse of the water, they fight harder than
              any other fish in the Northwest. Measuring at 2 - 10 feet in
              length Sturgeon can only be caught and kept a few days a year, the
              rest of the year is just catch and release.
            </p>
          </div>
        </div>
        <div className="white-block">
          <h3>Also See Crab, Fall Chinook, and Coho Above</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
