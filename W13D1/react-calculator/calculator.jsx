import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subtractNums = this.subtractNums.bind(this);
    this.multiplyNums = this.multiplyNums.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.clear = this.clear.bind(this);
  }

  //your code here
  setNum1(e) {
    e.preventDefault();
    if (e.target.value === '') {
      this.setState({ num1: '' });
    } else {
      this.setState({ num1: parseInt(e.target.value) });
    }
  }

  setNum2(e) {
    e.preventDefault();
    if (e.target.value === '') {
      this.setState({ num2: '' });
    } else {
      this.setState({ num2: parseInt(e.target.value) });
    }
  }

  addNums(e) {
    e.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState( { result });
  }

  subtractNums(e) {
    e.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiplyNums(e) {
    e.preventDefault();
    let result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divideNums(e) {
    e.preventDefault();
    let result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    this.setState({
      num1: '',
      num2: ''
    });
  }

  render(){
    const { result, num1, num2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} type="text" value={num1}/>
        <input onChange={this.setNum2} type="text" value={num2}/>
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick={this.addNums}> + </button>
        <button onClick={this.subtractNums}> - </button>
        <button onClick={this.multiplyNums}> * </button>
        <button onClick={this.divideNums}> / </button>
      </div>
    );
  }
}

export default Calculator;
