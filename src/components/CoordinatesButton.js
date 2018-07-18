// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  buttonClickHandler = (e) => {
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render() {
    return (
      <button onClick={this.buttonClickHandler}>
      </button>
    )
  }
}
 export default CoordinatesButton

// onReceiveCoordinates
