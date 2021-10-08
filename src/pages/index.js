import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
// import SEO from "../components/SEO"

import "../styles/Home.css"

import main from "../images/main.webp"
import huntingBow from "../images/huntingbow.webp"
import summer from "../images/summer-fishing.webp"
import spring from "../images/spring-fishing.webp"
import winter from "../images/winter-fishing.webp"
import fall from "../images/fall-fishing.webp"

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Layout>
        <div className="home-page">
          <div className="color-block">
            <h1>
              NW Bound Outdoors <br></br> Guided Fishing & Hunting Trips
            </h1>
          </div>
          <div className="white-block">
            <Link href="/meet-your-guide">
              <h2>Meet Kevin</h2>
              <img class="main-img" alt="Kevin Williams" src={main}></img>
              <p>
                Hi, I’m Kevin Williams owner of Northwest Bound Outdoors Guide
                Service. I grew up in Oregon and have been fishing in the
                Northwest since I was a kid (35 plus years.) As a kid and young
                adult I’ve spent most of my free time fishing every chance I can
                get... click to read more.
              </p>
            </Link>
          </div>
          <div className="color-block">
            <Link href="/booking-and-rates">
              <div className="ui primary button">Book A Trip</div>
            </Link>
            <a href="tel:9715999574">
              <div className="ui primary button">Call Now</div>
            </a>
          </div>
          <div className="white-block">
            <Link href="/booking-and-rates">
              <h2>Booking & Rates</h2>
              <p>
                Click here for information about the services I provide. I take
                people fishing and hunting. Fishing happens on a drift boat or
                sled boat. I also take people to the popular salmon fishing
                spot, Buoy 10.
              </p>
            </Link>
          </div>
          <div className="color-block">
            <h2>Fishing Seasons</h2>
          </div>
          <div className="white-block no-bottom-white-space">
            <Link href="/spring-oregon-fishing">
              <h3>Spring</h3>
              <img
                alt="spring fishing by a clear lake with trees"
                src={spring}
              ></img>
            </Link>
            <Link href="/summer-oregon-fishing">
              <br></br>
              <h3>Summer</h3>
              <img alt="2 kids summer fishing " src={summer}></img>
            </Link>
            <Link href="/fall-oregon-fishing">
              <br></br>
              <h3>Fall</h3>
              <img
                alt="fall fishing with boat on river with autumn colored trees"
                src={fall}
              ></img>
            </Link>
            <Link href="/winter-oregon-fishing">
              <br></br>
              <h3>Winter</h3>
              <img
                alt="winter fishing near mountains and dock"
                src={winter}
              ></img>
            </Link>
          </div>
          <Link href="/oregon-hunting">
            <div className="color-block">
              <h2>Hunting</h2>
            </div>
            <div className="white-block">
              <img
                className="smaller-img-desktop main-img"
                alt="hunting"
                src={huntingBow}
              ></img>
              <p>
                When you choose me as your guide for hunting I will show you how
                to track, spot & stalk, glass and communicate with the species
                we're hunting prior to the kill. Afterwards I will show you how
                to properly skin, quarter and pack out the animal. Please
                contact me via phone or email at the bottom of the page for
                questions about a guided hunt. I’ve personally harvested the
                following animals but am able and willing to hunt anything
                you're interested in. <br /> <br /> <strong>Harvested:</strong>{" "}
                <br /> Elk, Deer, Antelope, Hogs, Bear, Coyotes, Ram, Turkey,
                Ducks, and Geese..
              </p>
            </div>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default HomePage
