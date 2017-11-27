import React from 'react';

const TimerControls = (props) => {
  let isRunning = props.running;

  return (
    <div>
      <input
      onChange={props.handleSlider}
      min="60000" 
      max="3600000"
      value={props.time}
      step="60000" 
      type="range" 
      className={isRunning ? "time-slider d-none" : "mx-auto time-slider"} />

      <button 
              onClick={props.timerStart} 
              className={isRunning ? 'resume d-none' : 'start btn btn-lg btn-success'}>START</button>
      <button 
              onClick={props.timerStop} 
              className={isRunning ? 'stop btn btn-lg btn-danger' : 'stop d-none'}>STOP</button>
      <button 
              onClick={props.timerPause} 
              className={isRunning ? 'pause btn btn-lg btn-primary' : 'pause d-none'}>PAUSE</button>
  </div>
  )
};

export default TimerControls;
