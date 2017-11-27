import React from 'react';
import formatTime from 'format-duration';

const TimerDisplay = (props) => {
  return (
    <div>
      <span className="time-display">{formatTime(props.currentTime)}</span>
    </div>
  )
};

export default TimerDisplay;