// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
  buttonClickHandler = (e) => {
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.buttonClickHandler}>
      </button>
    )
  }


}
 export default DelayedButton
