import React, { Component } from 'react'

export default class Oscillator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    }

    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.oscillator = this.audioCtx.createOscillator();
  }

  componentDidMount = () => {
    this.oscillator.type = this.props.type;
    this.oscillator.frequency.setValueAtTime(this.props.freq, this.audioCtx.currentTime); // value in hertz
    this.oscillator.connect(this.audioCtx.destination);
  }

  onClick = () => {
    this.state.playing === true ? this.oscillator.stop() : this.oscillator.start();
    this.setState({
      playing: !this.state.playing
    });
  }
  
  
  render() {
    return (
      <div>
        <input type="button" onClick={this.onClick}></input>
        Oscillator component
      </div>
    )
  }
}
