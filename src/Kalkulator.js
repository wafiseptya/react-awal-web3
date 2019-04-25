import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Kalkulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: null,
      b: null,
      hasil: null,
      operator: null,
    };
  }

  calculate(e){
    e.preventDefault();

    const a = parseInt(this.refs.a.value);
    const b = parseInt(this.refs.b.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch (operator) {
      case '+':
        hasil = a+b;
        break;
    
      case '-':
        hasil = a-b;
        break;
    
      case '*':
        hasil = a*b;
        break;
    
      case '/':
        hasil = a/b;
        break;
    }

    this.setState({ a, b, hasil, operator});

  }
  
  kalkulator(){

    const {hasil, a, b, operator} = this.state;

    if(this.state.hasil) {
      return (
        <div>
          <br/>
          <p className="alert alert-success">
            {a+operator+b+' = '+hasil}
          
          </p>
        </div>
      );
    }
    
  }
  
  render() {
    return(
        
      <div className="container">

        <span className={this.props.items.active.color + " selected mb-5"}>
          {this.props.items.active.name}
        </span>

        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
          <form onSubmit={this.calculate.bind(this)}>
          <div className="row">
            <div className="col-md-4 p-0">
              <div className="input-group">
                <input type="number" ref="a" className="form-control" placeholder="input 1"></input>
              </div>
            </div>

            <div className="col-md-1 p-0">
              <div className="input-group">
                <select type="number" ref="operator" className="form-control" placeholder="input 1">
                  <option value="+">+</option>
                  <option value="-">+</option>
                  <option value="*">x</option>
                  <option value="/">/</option>
                </select>
              </div>
            </div>

            <div className="col-md-4 p-0">
              <div className="input-group">
                <input type="number" ref="b" className="form-control" placeholder="input 2"></input>
              </div>
            </div>
            <button className="col-md-3 btn btn-primary" onKeyPress={this.kalkulator()}>Pencet Gan</button>
          </div>
          </form>
            {this.kalkulator()}
          </div>
        </div>
      </div>

    );
  }
}

export default Kalkulator;
