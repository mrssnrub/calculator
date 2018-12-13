import React from 'react';
import {Button} from "./Button";
import {Calculator} from "./Calculator";
import {Clear} from "./Clear";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as math from 'mathjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: "",
    };



  }

  addInput = val => {
      if (val === '.' && this.state.calculator.indexOf('.') > -1) {
          return;
      }
          this.setState({
              calculator: this.state.calculator === '0' ? String(val) : this.state.calculator + val,


          });
      }


  handleEqual = () => {
      this.setState({
              calculator: math.eval(this.state.calculator)

          });
      }



  render() {
    return (
      <div className="App">
          <div className="calc-wrapper">
            <Calculator calculator={this.state.calculator}/>
              <div className="row">
                  <Button id="seven" handleClick={this.addInput}>7</Button>
                  <Button id="eight" handleClick={this.addInput}>8</Button>
                  <Button id="nine" handleClick={this.addInput}>9</Button>
                  <Button id="divide" handleClick={this.addInput}>/</Button>
              </div>

              <div className="row">
                  <Button id="four" handleClick={this.addInput}>4</Button>
                  <Button id="five" handleClick={this.addInput}>5</Button>
                  <Button id="six" handleClick={this.addInput}>6</Button>
                  <Button id="multiply" handleClick={this.addInput}>*</Button>
              </div>

              <div className="row">
                  <Button id="one" handleClick={this.addInput}>1</Button>
                  <Button id="two" handleClick={this.addInput}>2</Button>
                  <Button id="three" handleClick={this.addInput}>3</Button>
                  <Button id="add" handleClick={this.addInput}>+</Button>
              </div>

              <div className="row">
                  <Button id="decimal" handleClick={this.addInput}>.</Button>
                  <Button id="zero" handleClick={this.addInput}>0</Button>
                  <Button id="equals" handleClick={() => this.handleEqual(math)}>=</Button>
                  <Button id="subtract" handleClick={this.addInput}>-</Button>
              </div>

              <div className="row">
                  <Clear id="clear" handleClear={() => this.setState({calculator: ''})}>AC</Clear>
              </div>





      </div>
      </div>
    );
  }
}

export default App;
