import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleCellClick = () => {
    let newCellColor = this.props.getSelectedColor()
    this.setState({
      color: newCellColor
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}onClick={this.handleCellClick}>
      </div>
    )
  }
  
}
