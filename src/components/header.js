import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#001111`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        width:"100%",
        display:"flex",
        padding: `1.45rem 1.0875rem`,
        display:"inline-block",
      }}
    >
      <h2 style={{ margin: 0, display: `inline`,}}>
        <Link
          to="x"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <div style={{
          display:"block",
          right:0,
          textAlign:"right",
          overflow: "auto",
      }}>

        <Link to="x" style={{
          fontSize:"10px",
          height:"20px",
          padding:"auto",
          border:"0",
          borderRadius:"5px",
          color:"white",
          backgroundColor:"#00abff",
          textDecoration:"none",
          
          }} >
          download
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
