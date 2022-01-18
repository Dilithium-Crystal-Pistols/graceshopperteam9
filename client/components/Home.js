import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import GuessHomePage from './GuessHomePage'
/**
 * COMPONENT
 */
export const Home = props => {

  const {username          } = props

  return (
    <div className="homecontainer">
    <div className="home_header">
      <h2>Shop Now</h2>
    </div>

    <div className="home_products">
      <Link to="/posters">
        <div id="posters"> Products </div>
      </Link>
    </div>
  </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    id: state.auth.id
  }
}

export default connect(mapState)(Home)
