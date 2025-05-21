import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.clearData = this.clearData.bind(this)
    this.addOperator = this.addOperator.bind(this)
    this.state = {
      calculation: "",
      display: "0",
      result: 0
    }
  }

  getResult() {
    let string = this.state.calculation;
    string = string.replace(/x/g, "*");
    this.setState({
      calculation: this.state.calculation + "=" + eval(string),
      display: eval(string),
      result: eval(string)
    })
  }
  clearData() {
    this.setState({
      calculation: "",
      display: "0",
      result: 0
    })
  }
  addNumber(e) {
    let calc = this.state.calculation+e.target.innerText
    let display = this.state.display === "0" || isNaN(this.state.display) === true ? e.target.innerText : this.state.display+e.target.innerText
    if (this.state.result !== 0) {
      calc = e.target.innerText
      display = e.target.innerText
    } else if (this.state.display.includes(".") && String(e.target.innerText) === ".") {
      calc = this.state.calculation
      display = this.state.display
    }
    this.setState({
      calculation: calc,
      display: display,
      result: 0
    })
  }
  addOperator(e) {
    const operator = e.target.innerText;
    let calc = this.state.calculation+operator;
    if (this.state.result !== 0) {
      calc = this.state.result+operator;
    } else if (this.state.calculation.slice(-1) === operator) {
      calc = this.state.calculation;
    } else if (isNaN(this.state.calculation.slice(-1)) && this.state.calculation.slice(-1) !== operator && operator !== "-") {
      if (isNaN(this.state.calculation.slice(-2,-1))) {
        calc = this.state.calculation.slice(0,-2)+operator;
      } else {
        calc = this.state.calculation.slice(0,-1)+operator;
      }
    }
    document.getElementById("display").innerText = operator;
    this.setState({
      calculation: calc,
      display: operator,
      result: 0
    })
  }
  render() {
    return (
        <div className="App">
          <div id="calculator">
            <div id="grid-box">
              <div id="display-container">
                <div id="calculation">{this.state.calculation}</div>
                <div id="display">{this.state.display}</div>
              </div>
              <div onClick={this.clearData} className="calcButton" id="clear">AC</div>
              <div onClick={this.addOperator} className="calcButton" id="divide">/</div>
              <div onClick={this.addOperator} className="calcButton" id="multiply">x</div>
              <div onClick={this.addNumber} className="calcButton" id="seven">7</div>
              <div onClick={this.addNumber} className="calcButton" id="eight">8</div>
              <div onClick={this.addNumber} className="calcButton" id="nine">9</div>
              <div onClick={this.addOperator} className="calcButton" id="subtract">-</div>
              <div onClick={this.addNumber} className="calcButton" id="four">4</div>
              <div onClick={this.addNumber} className="calcButton" id="five">5</div>
              <div onClick={this.addNumber} className="calcButton" id="six">6</div>
              <div onClick={this.addOperator} className="calcButton" id="add">+</div>
              <div onClick={this.addNumber} className="calcButton" id="one">1</div>
              <div onClick={this.addNumber} className="calcButton" id="two">2</div>
              <div onClick={this.addNumber} className="calcButton" id="three">3</div>
              <div onClick={this.getResult} className="calcButton" id="equals">=</div>
              <div onClick={this.addNumber} className="calcButton" id="zero">0</div>
              <div onClick={this.addNumber} className="calcButton" id="decimal">.</div>
            </div>
            <span id="credits">by <a target="_blank" rel="noreferrer" href="https://noah-kleinert.de">Noah Kleinert</a></span>
          </div>
        </div>
    );
  }
}

export default App;
