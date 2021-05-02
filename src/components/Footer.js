import React from "react"
import { Link } from "gatsby"

import Logo from "../images/nw-bound-logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import "../styles/Footer.css"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link href="/">
          <img
            alt="nw bound outdoors logo"
            className="footer-logo"
            src={Logo}
            width="100px"
            height="100px"
          ></img>
        </Link>
        <br></br>
        <p className="contact-text">
          <strong>Contact Information</strong>
        </p>
        <div>
          <div className="footer-text">kevin@nwboundoutdoors.com</div>
          <a
            href="mailto:kevin@nwboundoutdoors.com"
            className="ui button primary"
          >
            Email Us
          </a>
        </div>
        <div>
          <div className="footer-text phone-num">(971) 599-9574</div>
          <a
            href="tel:9715999574
          "
            className="ui button primary"
          >
            Call Us
          </a>
        </div>
        <div className="social-icons">
          <Link href="https://www.facebook.com/NWBOUNDOUTDOORS/">
            <FontAwesomeIcon className="facebook" size="2x" icon={faFacebook} />
          </Link>
          <Link href="https://www.instagram.com/nwboundoutdoors/?hl=en">
            <FontAwesomeIcon
              className="instagram"
              size="2x"
              icon={faInstagram}
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCW3TAbodZ1wNIe-AC91SxcQ">
            <FontAwesomeIcon className="youtube" size="2x" icon={faYoutube} />
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
