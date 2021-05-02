import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "semantic-ui-css/semantic.min.css"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `NW Bound Outdoors`}
      />
      <div className="first-div">
        <main>
          <Helmet>
            <meta charSet="utf-8" />
            <title>NW Bound Outdoors - Oregon Fishing & Hunting Guide</title>
          </Helmet>
          {children}
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
