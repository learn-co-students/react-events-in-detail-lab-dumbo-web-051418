// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
  }

  mouseClick = (event) => {
    console.log(event);
    let coordArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordArray)
  }

  render(){
    return (
      <button onClick={this.mouseClick}>CoordinatesButton</button>
    )
}

}
