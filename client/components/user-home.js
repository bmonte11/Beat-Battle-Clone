import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  // const {email} = props
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>Welcome, {this.props.email}</h3>
        <div className="tracks">
          <div>Tracks: 0</div>
          <h3>Got a new track to upload? Put it here:</h3>
          <input type="file" />
        </div>
        <div className="stats">
          <p>Upvotes: 0</p>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
