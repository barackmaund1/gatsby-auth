import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './layout.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display:`flex`,
      }}
    > 
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className='nav'>
        <ul >
          <li><Link className='link' to='/register'>Register</Link></li>
          <li><Link className='link' to='/login'>login</Link></li>
          <li><Link className='link'to='/'>Logout</Link></li>
        </ul>
      </nav>
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
