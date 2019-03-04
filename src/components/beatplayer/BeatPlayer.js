import React, { Component } from 'react'
import Button from '../common/Button'
import beat from '../../assets/tink.wav';
import accent from '../../assets/accent.wav'

export default class BeatPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.speed !== this.props.speed && prevState.playing) {
      this.stopPlaying();
      this.startPlay();
    }
  }

  componentWillUnmount = () => {
    window.clearInterval(this.state.intervalId);
  }

  // maybe we should build a 'bar' array to hold the sounds, and just loop that
  startPlay = () => {
    this.props.accents.includes(1) ? this.refs.accent.play() :
      this.refs.beat.play();
    let currentBeat = 2;
    const id = window.setInterval(() => {
      console.log(currentBeat);
      this.props.accents.includes(currentBeat) ? this.refs.accent.play() : this.refs.beat.play();
      currentBeat === this.props.beats ? currentBeat = 1 : currentBeat++;
    }, 1 / (this.props.speed / 60) * 1000);

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
