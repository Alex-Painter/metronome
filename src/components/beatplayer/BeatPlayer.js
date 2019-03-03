import React, { Component } from 'react'
import Button from '../common/Button'
import beat from '../../assets/tink.wav';
import accent from '../../assets/tink.wav'

export default class BeatPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: props.speed,
      beats: props.beats,
      accents: props.accents,
      playing: false,
    }
  }

  startPlay = () => {
    this.state.accents.includes(1) ? this.refs.accent.play() :
      this.refs.beat.play();
    const id = window.setInterval(() => {
      let currentBeat = 2;
      this.state.accents.includes(currentBeat) ? this.refs.accent.play() : 
        this.refs.accent.play();
      this.state.currentBeat === this.state.beats ? currentBeat = 0 :
        currentBeat++;
      console.log(currentBeat);
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

  handlePlayClick = () => {
    this.state.playing ? this.stopPlaying() : this.startPlay();
  }
  
  render() {
    return (
      <div>
        <audio ref="beat">
          <source src={beat} type="audio/wav"></source>
          <p>Browser doesn't support audio!</p>
        </audio>
        <audio ref="accent">
          <source src={accent} type="audio/wav"></source>
        </audio>
        <div>
          <Button text="Start" onClick={this.handlePlayClick} />
        </div>
      </div>
    );
  }
}
