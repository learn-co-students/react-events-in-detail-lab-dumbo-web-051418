// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {


// onDelayedClick={ event => console.log(event) } delay={1500} />

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event),
      this.props.delay
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>DELAYED CLICK
        </button>
    </div>
    )
  }

}
export default DelayedButton;
