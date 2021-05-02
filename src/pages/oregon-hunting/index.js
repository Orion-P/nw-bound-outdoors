import React from "react"
import { Icon } from "semantic-ui-react"

import Layout from "../../components/Layout"
// import SEO from "../components/SEO"

import "../../styles/Hunting.css"
import kevinPic from "../../images/placeholder.png"

const IndexPage = () => (
  <Layout>
    <div className="hunting-page">
      <div className="white-block">
        <hr></hr>
        <h2>Hunting Guide Services</h2>
        <hr></hr>

        <div>
          <h3>Hunting</h3>
          <img
            className="smaller-img smaller-img-desktop"
            alt="hunting"
            src={kevinPic}
          ></img>
          <p>
            Hello my name is Kevin Williams, I’m an avid outdoorsman who lives
            and breathes the outdoors. I started hunting at the age of 13 with
            my dad and my brother, I come from a family full of hunters. I've
            been an avid bowhunter since I was 16 years old and have
            participated in and won several archery tournaments.
          </p>
          <p>
            Up until recently when my son was born I donated several hours at
            various community centers teaching children and adults how to shoot
            bows. There’s not a day that goes by when I’m not thinking about
            hunting and being out in the woods. I’ve spent countless days and
            hours studying and learning how these animals survive and what their
            daily routines are. This includes practicing my calling for all
            species and learning how to communicate with them for successful
            hunts.
          </p>
          <p>
            I’ve harvested many animals and have helped many people harvest
            theirs during bow and rifle hunting seasons. Being able to help
            families put food on the table over the years brings me so much
            happiness. No matter what I'm chasing I've been very successful
            during all the years I've hunted. When you choose me as your guide
            for hunting I will show you how to track, spot & stalk, glass and
            communicate with the species we're hunting prior to the kill.
            Afterwards I will show you how to properly skin, quarter and pack
            out the animal.
          </p>
          <p>
            Please contact me below or send me an email by pressing the button
            at the bottom of the page if you have questions about going on a
            guided hunt. I’ve personally harvested the following animals but am
            able and willing to hunt anything you're interested in. <br />
            <br /> <strong>Harvested:</strong> <br /> Elk, Deer, Antelope, Hogs,
            Bear, Coyotes, Ram, Turkey, Ducks, and Geese.
          </p>
        </div>
      </div>
      <div className="color-block">
        <a href="tel:9715999574">
          <div className="ui primary button">
            <Icon className="phone"></Icon>Call To Schedule Your Trip
          </div>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
