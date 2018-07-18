// Code DelayedButton Component Here
import React from 'react'
export default class DelayedButton extends React.Component{

  mouseClick = (event) => {
    // console.log(this.props);
    // debugger
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)

  }

  render(){
    return (
    <button onClick={this.mouseClick}>DelayedButton</button>
  )
  }



}
