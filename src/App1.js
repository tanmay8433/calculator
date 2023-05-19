import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  handleClick = (e) => {
    this.setState({
      result: this.state.result.concat(e.target.name)
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result).toString()
      });
    } catch (error) {
      this.setState({
        result: 'Error'
      });
    }
  };

  clear = () => {
    this.setState({
      result: ''
    });
  };

  render() {
    return (
      <center>
        <h1> calculator</h1>
        <div className="calculator">

          <div className="result">{this.state.result}</div>
          <div className="button-container">
            <button className="operator" onClick={this.clear}>C</button>
            <button name="=" className="operator" onClick={this.calculate}>=</button>
            <button name="/" className="operator" onClick={this.handleClick}>/</button>
            <button name="7" onClick={this.handleClick}>7</button>
            <button name="8" onClick={this.handleClick}>8</button>
            <button name="9" onClick={this.handleClick}>9</button>
            <button name="*" className="operator" onClick={this.handleClick}>*</button>
            <button name="4" onClick={this.handleClick}>4</button>
            <button name="5" onClick={this.handleClick}>5</button>
            <button name="6" onClick={this.handleClick}>6</button>
            <button name="-" className="operator" onClick={this.handleClick}>-</button>
            <button name="1" onClick={this.handleClick}>1</button>
            <button name="2" onClick={this.handleClick}>2</button>
            <button name="3" onClick={this.handleClick}>3</button>
            <button name="+" className="operator" onClick={this.handleClick}>+</button>
            <button name="0" className="zero" onClick={this.handleClick}>0</button>
            <button name="." onClick={this.handleClick}>.</button>

          </div>
        </div>
      </center>
    );
  }
}

export default Calculator;

