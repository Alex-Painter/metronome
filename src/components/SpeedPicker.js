import React, { Component } from 'react';
import Button from './common/Button'
import sound from '../assets/tink.wav'

// set playing and interval when component mounts
class SpeedPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      speed: 40
    }
    this.beat = new Audio('../assets/tink.wav');
  }

  render() {
    return (
      <div>
        <div>
          <input type="range" name="slider" min="40" max="300" defaultValue={this.props.default} onChange={this.updateSpeed}></input>
          <label htmlFor="slider">{this.state.speed}</label>
        </div>
        <div>
          <Button text="Start" onClick={this.handlePlayClick} />
          </div>
      </div>
    );
  }

  //<audio ref="beat" src="../assets/tink.wav"></audio>

  //class field syntax **experimental**
  updateSpeed = (e) => {
    e.persist()
    this.setState(state => ({
      speed: e.target.value
    }));
  }

  handlePlayClick = () => {
    this.state.playing ? this.stopPlaying() : this.startPlay();
  }

  startPlay = () => {
    const id = window.setInterval(() => {
      const promise = this.beat.play();
      promise.then(() => {
        console.log("playback worked");
      }, (err) => {
        console.log(err);
      }).catch(err => {
        console.log("ERROR");
        console.log(err);
      });
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