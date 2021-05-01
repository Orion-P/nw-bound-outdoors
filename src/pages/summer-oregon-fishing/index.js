import * as React from "react"

import ImgSlider from "../../components/ImgSlider"
import Layout from "../../components/Layout"
// import SEO from "../components/SEO"

import "../../styles/FishingSeason.css"

import chinook from "../../images/springchinook8.webp"
import chinook1 from "../../images/springchinook1.webp"
import chinook2 from "../../images/springchinook5.webp"
import steelhead1 from "../../images/wintersteelhead1.webp"
import steelhead2 from "../../images/wintersteelhead2.webp"
import steelhead3 from "../../images/wintersteelhead3.webp"
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
      <div className="color-block">
        <h1>Oregon Summer Fishing</h1>
      </div>
      <div>
        <h2 class="month">June</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3>Spring Chinook</h3>
            <ImgSlider
              alt="spring chinook fish"
              img1={chinook2}
              img2={chinook}
              img3={chinook1}
            ></ImgSlider>
            <p>
              Chinook salmon are one of the Pacific salmon species and can be up
              to 50 lbs, although 10-25 is more common. The spring Chinook
              salmon is the best tasting salmon you’ll eat.
            </p>
          </div>
        </div>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3> Summer Steelhead</h3>
            <ImgSlider
              alt="steelhead fish"
              img1={steelhead3}
              img2={steelhead1}
              img3={steelhead2}
            ></ImgSlider>
            <p>
              These fish are widely available in the Northwest and weigh about
              5-15 pounds. Summer Steelhead fish will put up a good fight
              becoming airborne as you're trying to reel them in.
            </p>
          </div>
        </div>

        <div className="white-block ">
          <div>
            <h3>Sturgeon</h3>
            <img
              alt="sturgeon fish"
              className="individual-img"
              src={sturgeon}
            ></img>
            <p>
              These fish are the powerhouse of the water, they fight harder than
              any other fish in the Northwest. Measuring at 2 - 10 feet in
              length Sturgeon can only be caught and kept a few days a year, the
              rest of the year is just catch and release.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="month">July</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3>Coho</h3>
            <ImgSlider
              alt="coho fish"
              img1={coho}
              img2={coho1}
              img3={coho2}
            ></ImgSlider>
            <p>
              These fish are also known as silvers and weigh about 8-12 pounds,
              24-30 inches long. Coho salmon are a rich reddish orange meat and
              are very tasty much like the Spring Chinook Salmon.
            </p>
          </div>
        </div>
        <div className="white-block">
          <h3>Also See Summer Steelhead, Spring Chinook, and Sturgeon Above</h3>
        </div>
      </div>
      <div>
        <h2 class="month">August</h2>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3>Crab</h3>
            <ImgSlider
              alt="crabs"
              img1={crab}
              img2={crab1}
              img3={crab2}
            ></ImgSlider>
            <p>TODO</p>
          </div>
        </div>
        <div className="white-block no-bottom-white-space">
          <div>
            <h3>Fall Chinook</h3>
            <ImgSlider
              alt="fall chinook fish"
              img1={chinook2}
              img2={chinook}
              img3={chinook1}
            ></ImgSlider>
            <p>
              Fall Chinook salmon are the largest of all salmon we fish for in
              Oregon. Catching a 30 plus pound Fall Chinook is not uncommon.
              These are also great tasting fish to eat and with the beautiful
              fall weather makes for an awesome day of fishing.
            </p>
          </div>
        </div>
        <div className="white-block">
          <h3>Also See Coho Above</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
