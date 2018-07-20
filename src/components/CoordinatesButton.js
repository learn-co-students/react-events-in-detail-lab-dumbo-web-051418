// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleMouseCoordinates = (event) => {
    let xCoordinate = event.clientX
    let yCoordinate = event.clientY
    this.props.onReceiveCoordinates([xCoordinate, yCoordinate])
  }

  render() {
    return (
      <button onClick={this.handleMouseCoordinates}></button>
    )
  }

}

export default CoordinatesButton;
