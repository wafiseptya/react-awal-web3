import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: null,
      b: null,
      hasil: null,
      operator: null,
      active: {
        name: 'Home',
        color: 'red',
        gambar: 'red.png'
      },
    };
  }

  clicked(menu){
    this.setState({
      active: menu,
    });
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

  showImage(){
    console.log(this.state.active.gambar);
    return <img className="image" src={this.state.active.gambar}></img>
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
    return (
      <div id="app">
        {/* map akan loop sebanyak menu yang didefinisikan */}
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((menu, index) => {
          var style = 'menu';

          if (this.state.active.name === menu.name) {
            style = `${style} ${menu.color} is-activate`;
            
            console.log(menu.name);
            console.log(this.state.active.img);
          }
          return(
            <a className={style}
            // bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
            onClick={
              this.clicked.bind(this, menu)
            }
            key={index}
            >
              {menu.name}
            </a>
          );
        })}
        </nav>

        <div className="info">
        
          ini adalah <span className={this.state.active.color + " selected"}>
            {this.state.active.name}
          </span>
        </div>
        {this.showImage()}
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <form onSubmit={this.calculate.bind(this)}>
            <div className="row">
              <div className="col-md-5 p-0">
                <div className="input-group">
                  <input type="number" ref="a" className="form-control" placeholder="input 1"></input>
                </div>
              </div>

              <div className="col-md-2 p-0">
                <div className="input-group">
                  <select type="number" ref="operator" className="form-control" placeholder="input 1">
                    <option value="+">+</option>
                    <option value="-">+</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                  </select>
                </div>
              </div>

              <div className="col-md-5 p-0">
                <div className="input-group">
                  <input type="number" ref="b" className="form-control" placeholder="input 2"></input>
                </div>
              </div>
              <button className="btn btn-primary" onKeyPress={this.kalkulator()}>Pencet Gan</button>
            </div>
            </form>
              {this.kalkulator()}
            </div>
          </div>
        </div>

        
        
      </div>
    );
  }
}

export default App;
