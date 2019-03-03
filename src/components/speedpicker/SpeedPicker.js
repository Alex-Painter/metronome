import React from 'react';
import Input from '../common/Input'

const SpeedPicker = (props) => {
  return (
    <div>
      <div>
        <Input type="range" name="slider" min="40" max="300" value={props.speed} onChange={(e) => props.onUpdate(e.target.value)}></Input>
        <Input type="number" value={props.speed} onChange={(e) => props.onUpdate(e.target.value)}></Input>
      </div>
    </div>
  );
}

export default SpeedPicker;