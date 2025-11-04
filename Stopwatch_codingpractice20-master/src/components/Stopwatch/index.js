import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerStarted: false,
    timeElapsedinSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStarted: false, timeElapsedinSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStarted: false})
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerStarted: true})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedinSeconds: prevState.timeElapsedinSeconds + 1,
    }))
  }

  seconds() {
    const {timeElapsedinSeconds} = this.state
    const secondstime = Math.floor(timeElapsedinSeconds % 60)
    if (secondstime < 10) {
      return `0${secondstime}`
    }
    return secondstime
  }

  miniutes() {
    const {timeElapsedinSeconds} = this.state
    const minitstime = Math.floor(timeElapsedinSeconds / 60)
    if (minitstime < 10) {
      return `0${minitstime}`
    }
    return minitstime
  }

  render() {
    const {isTimerStarted} = this.state
    const time = `${this.miniutes()}:${this.seconds()}`
    return (
      <div className="maindiv">
        <div className="subdiv">
          <div className="timeblock">
            <h1 style={{marginBottom: '20px'}}> Stopwatch</h1>
            <div className="imgtime">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>

            <h1 className="time">{time}</h1>
            <div className="buttondiv">
              <button
                type="button"
                className="startbutton"
                onClick={this.onStart}
                disabled={isTimerStarted}
              >
                Start
              </button>
              <button
                type="button"
                className="stopbutton"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="resetbutton"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
