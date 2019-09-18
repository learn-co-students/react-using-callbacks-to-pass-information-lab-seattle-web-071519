import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.state = {
      color: this.props.color
    }
  }
  
  paintThis = (event) => {
    console.log(event)
    let color = this.props.getColor()
    this.setState({color: color})
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onMouseDown={this.paintThis}>
      </div>
    )
  }
  
}
