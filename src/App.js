import React, { Component } from 'react';
import SpeedPicker from './components/SpeedPicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          Awesome React Metronome
        </div>
        <div className="main">
        <SpeedPicker default="120" />
        <ul>
          <li>choose bpm</li>
          <li>play sound every beat</li>
          <li>choose accent</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
