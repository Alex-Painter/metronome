import React, { Component } from 'react';
import Button from './common/Button'
import Input from './common/Input'
import beat from '../assets/tink.wav'

class SpeedPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      speed: 40
    }
  }

  render() {
    return (
      <div>
        <div>
          <input type="range" name="slider" min="40" max="300" value={this.state.speed} onChange={this.updateSpeed}></input>
          <Input type="number" value={this.state.speed} onChange={this.updateSpeed} number={this.state.speed}></Input>
        </div>
        <div>
          <Button text="Start" onClick={this.handlePlayClick} />
        </div>
        <audio ref="beat">
          <source src={beat} type="audio/wav"></source>
          <p>Browser doesn't support audio!</p>
        </audio>
      </div>
    );
  }

  //class field syntax **experimental**
  updateSpeed = (e) => {
    e.persist()
    this.setState(state => ({
      speed: e.target.value
    }));

    if (this.state.playing) {
      this.stopPlaying();
    }
  }

  handlePlayClick = () => {
    this.state.playing ? this.stopPlaying() : this.startPlay();
  }

  startPlay = () => {
      this.refs.beat.play();
    const id = window.setInterval(() => {
      this.refs.beat.play();
    }, 1 / (this.state.speed / 60) * 1000);

    this.setState(state => ({
      playing: true,
      intervalId: id
    }));
  }

  stopPlaying = () => {
    window.clearInterval(this.state.intervalId);
    this.setState({
      playing: false,
      intervalId: ""
    })
  }
}

export default SpeedPicker;