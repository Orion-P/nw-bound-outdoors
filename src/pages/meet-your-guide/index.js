import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
// import SEO from "../components/SEO"

import "../../styles/MeetYourGuide.css"
import kevinPic from "../../images/walleye1.webp"


class MeetKevin extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="meet-your-guide-page">
          <div className="color-block">
            <h2>Meet Kevin</h2>
          </div>
          <div className="white-block">
            <img alt="Kevin Williams" src={kevinPic}></img>
            <p>
              Hi, I’m Kevin Williams, owner of Northwest Bound Outdoors Guide
              Service. I grew up in Oregon and have been fishing in the
              Northwest since I was a kid (35 plus years.)
            </p>

            <p>
              As a kid and young adult I’ve spent most of my free time fishing
              every chance I can get. The amount of time and opportunities have
              provided me with the experience and knowledge needed to know what
              the best techniques are, what the fish like, and the ability to
              know how to monitor the river conditions, water levels and local
              fishing reports. The knowledge and experience I’ve gained over a
              lifetime of fishing will guarantee you the best guided fishing
              trip you can find.
            </p>
            <p>
              My goal is to provide a safe and comfortable guided fishing trip.
              I truly enjoy sharing my knowledge and watching the excitement in
              helping you, your family, and your friends reel in their fish.
              After all these years I’ve been fishing and sharing my
              experiences, it’s just as exciting as the first time. My job is to
              help set you up for success with the right equipment for an
              enjoyable day of fishing that will make a lifetime of lasting
              memories.
            </p>
            <p>
              I’m certified by the US Coast Guard, licensed and insured to guide
              in Oregon. I look forward to meeting you and creating lasting
              relationships for all your fishing needs. Fishing is my occupation
              but also my passion!
            </p>
          </div>
          <div className="color-block">
            <Link href="/booking-and-rates">
              <div className="ui primary button">Book A Trip Now</div>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MeetKevin
