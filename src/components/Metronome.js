import React, { Component } from 'react'
import SpeedPicker from './speedpicker/SpeedPicker';
import BeatPlayer from './beatplayer/BeatPlayer';

export default class Metronome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 120,
      beats: 4,
      accents: [1],
    }
  }
 
  render() {
    return (
      <div>
        <div>
          <SpeedPicker speed={this.state.speed} onUpdate={this.onSpeedChange}/>
        </div>
        <div>
        
        </div>
        <div>
          <BeatPlayer speed={this.state.speed} beats={this.state.beats}
            accents={this.state.accents}/>
        </div>
      </div>
    )
  }
}
