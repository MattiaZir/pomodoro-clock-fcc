import React, { Component } from 'react';
import TimerDisplay from './timer_display';
import TimerControls from './timer_controls';


class Timer extends Component {
  constructor(props) {
    super(props);

    // THIS BINDING //
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.handleSliderInput = this.handleSliderInput.bind(this);
    this.checkIfBreak = this.checkIfBreak.bind(this);

    // VARIABLE DECLARATION //
    this.defaultTime = 2500 * 60 * 10;
    this.isBreak = false;

    this.state = {
      running: false,
      currentTime: this.defaultTime // 25 minutes in ms
    };
  }

  render() {
    return (
      <div className="mx-auto text-center">
        <TimerDisplay currentTime={this.state.currentTime} />
        <TimerControls timerStart={this.startTimer} 
                       timerStop={this.stopTimer}
                       timerPause={this.pauseTimer}
                       handleSlider={this.handleSliderInput}
                       running={this.state.running}
                       time={this.state.currentTime} />
      </div>
    );
  }

  tick() {
    if(this.state.currentTime > 0) {
      this.setState({currentTime: this.state.currentTime - 1000});
    } else {
      this.stopTimer();
      this.checkIfBreak();
    }
  }

  // Checks whether it's time for a break or not, if it is, it sets the current time to 5 minutes
  checkIfBreak() {
    if(this.isBreak) {
      this.isBreak = false;
      this.setState({ currentTime: this.defaultTime });
    } else {
      this.isBreak = true;
      this.setState({ currentTime: 5000 * 60 });
    }
  }

  setRunning(bool) {
    this.setState({ running: bool });
  }

  handleSliderInput(event) {
    this.setState({ currentTime: parseInt(event.target.value) });
  }

  // -------- TIMER METHODS -------- //
   startTimer() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setRunning(true);
  }

  stopTimer() {
    if(this.state.currentTime > 0) {
      this.setState({ currentTime: this.defaultTime });
    }
    document.querySelector('.resume').innerHTML = 'START';
    clearInterval(this.interval);
    this.setRunning(false);
  }

  pauseTimer() {
    clearInterval(this.interval);
    document.querySelector('.resume').innerHTML = 'RESUME';
    this.setRunning(false);
  }
}

export default Timer;