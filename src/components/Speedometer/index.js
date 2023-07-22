// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="speedo-image"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h2 className="speed">
            Speed is <span>{count}mph</span>
          </h2>
          <p className="Warning">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="Accelerate"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button type="button" className="break" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
