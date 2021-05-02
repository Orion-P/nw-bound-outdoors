import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import { Icon } from "semantic-ui-react"
// import SEO from "../components/SEO"

import "../../styles/MeetYourGuide.css"

import hunting from "../../images/hunting.webp"
import buoy10 from "../../images/bouy10.webp"
import sledBoat from "../../images/sledboat2.webp"
import driftBoat from "../../images/driftboat2.webp"

const MeetKevin = () => (
  <Layout>
    <div className="meet-your-guide-page">
      <div className="color-block">
        <h1>Booking & Rates</h1>
      </div>
      <div className="white-block no-bottom-margin">
        <hr></hr>
        <h2>Fishing Guide Services</h2>
        <hr></hr>
      </div>
      <div className="white-block no-bottom-white-space">
        <br />
        <p>
          I own and operate a 16 foot Alumaweld drift boat for the smaller
          rivers and a 25 foot Alumaweld Columbia sled for the large rivers.
        </p>

        <p>
          <br />
          <strong>I supply the following:</strong>
          <br /> <br /> Life vests <br /> <br /> Rods <br /> <br /> Reels <br />
          <br /> Bait and tackle <br /> <br />
        </p>

        <p>
          <strong>What you need to bring:</strong> <br /> <br /> Oregon fishing
          license & tags <br /> <br /> Lunch/Drinks Cooler to bring your fish
          home in <br /> <br /> Sunscreen (weather permitting) <br /> <br />
          Warm clothes (weather permitting) <br /> <br /> Rain Gear (weather
          permitting) <br /> <br />
        </p>
        <p>
          *Fill the boat for a group discount of $100.00. This means that if you
          want to book all of the seats on the boat (even if its just for you)
          or do a private party by booking all the seats, there’s a discount
          provided.
        </p>

        <p>
          *Cancellations within 30 days of the trip are fully refundable. Less
          than 30 days can be rescheduled or are non refundable.
        </p>
        <br />
      </div>

      <div className="color-block">
        <Link href="https://squareup.com/appointments/book/uu4iatwccr4f0e/L2WSFAAXGPHA9/start">
          <div className="ui primary button">Schedule My Trip</div>
        </Link>
      </div>

      <div className="white-block">
        <div>
          <h3>DRIFT BOAT</h3>
          <img
            className="smaller-img smaller-img-desktop"
            alt="drift boat"
            src={driftBoat}
          ></img>
          <p>
            16 ft Drift boat: seats 2-3 people $200.00 per seat. A $50.00 non
            refundable deposit per seat is due at the time of booking.
          </p>
        </div>
      </div>

      <div className="color-block">
        <Link href="https://squareup.com/appointments/book/uu4iatwccr4f0e/L2WSFAAXGPHA9/start">
          <div className="ui primary button">Schedule My Trip</div>
        </Link>
      </div>

      <div className="white-block">
        <h3>SLED BOAT</h3>
        <img
          className="smaller-img-desktop"
          alt="sled boat"
          src={sledBoat}
        ></img>
        <p>
          25 ft Sled: seats 5 people $200.00 per seat. A $50.00 non refundable
          deposit per seat is due at the time of booking.
        </p>
      </div>

      <div className="color-block">
        <Link href="https://squareup.com/appointments/book/uu4iatwccr4f0e/L2WSFAAXGPHA9/start">
          <div className="ui primary button">Schedule My Trip</div>
        </Link>
      </div>

      <div className="white-block">
        <h3>Buoy 10</h3>
        <img
          className="smaller-img-desktop"
          alt="buoy 10 fishing spot"
          src={buoy10}
        ></img>
        <p>
          $250.00 per seat. Where the Columbia river meets the Pacific Ocean.
          Huge numbers of Chinook and Coho travel up the Columbia river from the
          Pacific Ocean through the mouth of the Columbia and past Astoria on
          the way upstream. Buoy 10 is one of the most popular and productive
          salmon fisheries in Oregon and is where you can catch a limit of hard
          fighting salmon fresh in from the Pacific Ocean. A $50.00 non
          refundable deposit per seat is due at the time of booking.
        </p>
      </div>

      <div className="color-block">
        <Link href="https://squareup.com/appointments/book/uu4iatwccr4f0e/L2WSFAAXGPHA9/start">
          <div className="ui primary button">Schedule My Trip</div>
        </Link>
      </div>

      <div className="white-block">
        <hr></hr>
        <h2>Hunting Guide Services</h2>
        <hr></hr>

        <div>
          <h3>Hunting</h3>
          <img
            className="main-img hunting-img"
            alt="hunting"
            src={hunting}
          ></img>
          <p>
            When you choose me as your guide for hunting I will show you how to
            track, spot & stalk, glass and communicate with the species we're
            hunting prior to the kill. Afterwards I will show you how to
            properly skin, quarter and pack out the animal. Please contact me
            below or send me an email through the bottom of the page for
            questions on a guided hunt. I’ve personally harvested the following
            animals but am able and willing to hunt anything you're interested
            in.
            <br /> <br /> <strong>Harvested:</strong> <br /> Elk, Deer,
            Antelope, Hogs, Bear, Coyotes, Ram, Turkey, Ducks, and Geese.
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

export default MeetKevin
