// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  constructor(props){
    super(props);
  }

  buttonHandler(event){
    event.persist();
    setTimeout(this.props.onDelayedClick,
      this.props.delay, event);
  }

  render(){
    return (
      <button onClick={this.buttonHandler.bind(this)}>Button 2</button>
    );
  }
}
