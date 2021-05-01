import React from "react"

import { Link } from "gatsby"
import { Icon } from "semantic-ui-react"

import { slide as Menu } from "react-burger-menu"

import Logo from "../images/nw-bound-logo.webp"

import "../styles/Header.css"

class Header extends React.Component {
  state = { isActive: false }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const isActive = this.state.isActive
    return (
      <div class="ui inverted compact fixed menu main-header">
        <Menu>
          <Link className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/meet-your-guide">
            Meet Your Guide
          </Link>
          <Link className="menu-item" href="/booking-and-rates">
            Booking & Rates
          </Link>
          <div onClick={this.handleToggle}>
            Fishing <Icon className="caret right"></Icon>
          </div>
          <div
            className={isActive ? "fishing-seasons" : "hidden fishing-seasons"}
          >
            <Link href="/spring-oregon-fishing">Spring</Link>
            <Link href="/summer-oregon-fishing">Summer</Link>
            <Link href="/fall-oregon-fishing">Fall</Link>
            <Link href="/winter-oregon-fishing">Winter</Link>
          </div>
          <Link className="menu-item" href="/fishing"></Link>
          <Link className="menu-item" href="/oregon-hunting">
            Hunting
          </Link>
        </Menu>

        <div class="right menu">
          <div class="header item">
            <a href="/">
              <img
                alt="nw bound outdoors logo"
                className="logo"
                src={Logo}
                height="100px"
                width="100px"
              ></img>
            </a>
          </div>
        </div>
        <div class="right menu">
          <div class="item">
            <a
              href="https://squareup.com/appointments/book/d4ctoy7ndtq03g/LDD696QWAJDWJ/start"
              class="ui inverted button booking-button"
            >
              Book A Trip
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
