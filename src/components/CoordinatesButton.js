// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <div><button onClick={this.handleClick}>Coordinates</button></div>
    )
  }

}

export default CoordinatesButton
