import React from 'react';

const Button = (props) => {
  return (
    <div>
      <input type="button" onClick={props.onClick} value={props.text}></input>
    </div>
  );
}

export default Button;