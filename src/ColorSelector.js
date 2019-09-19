import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "burlywood", "teal", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={this.handleChangeColorClick} style={{backgroundColor: str}}/>
    })
  )

  handleChangeColorClick = (event) =>{
    this.props.onSetColor(event.target.style.backgroundColor)
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
