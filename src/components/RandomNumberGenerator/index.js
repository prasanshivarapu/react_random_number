// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {a: 0}

  btn = () => {
    this.setState(p => ({a: Math.ceil(Math.random(0.1, 1) * 100)}))
  }

  render() {
    const {a} = this.state
    return (
      <div className="greet1 greet2">
        <div className="greet2">
          <h1 className="greet3">Random number</h1>
          <p>Generate a random number in range of 0 to 100</p>
          <button className="button" type="button" onClick={this.btn}>
            Generate
          </button>
          <p className="greet3">{a}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
