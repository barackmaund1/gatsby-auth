import * as React from "react"
import PropTypes from "prop-types"
import { Link ,navigate} from "gatsby"
import './layout.css'
import { useContext } from "react"
import { AuthContext } from "../context/auth"
import firebase from 'gatsby-plugin-firebase'

const Header = ({ siteTitle }) => {
  const {user}=useContext(AuthContext)
  const handlelogout =async()=>{
    await firebase.auth().signOut()
    navigate('/login')
  }

  return (
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
          {!user?
            <React.Fragment>
                <li><Link className='link' to='/register'>Register</Link></li>
            <li><Link className='link' to='/login'>login</Link></li>
            </React.Fragment>
            :
            (

            <li><Link className='link'to='/' onClick={handlelogout}>Logout</Link></li>
            
            )
          }
         
       
        </ul>
      </nav>
    </div>
  </header>
  )
  
        
        }
        
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
