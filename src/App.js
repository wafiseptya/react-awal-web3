import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Kalkulator from './Kalkulator.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  

  showImage(){
    console.log(this.state.active.gambar);
    return <img className="image" src={this.state.active.gambar}></img>
  }

  kalkulator2(param){
    console.log(param);
    if(param == 'Calculator'){
      
      return <Kalkulator items = {this.state}/>;
      
    }else if (param == 'Profile') {
      return <Profile name = 'hanif wafi s'/>
    }else {
      return(
        <div>
          ini adalah <span className={this.state.active.color + " selected"}>
            {this.state.active.name}
          </span>
          <img className="image" src={this.state.active.gambar}></img>

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
        
          {this.kalkulator2(this.state.active.name)}
          
        </div>
        {/* {this.showImage()} */}

        
        
        
      </div>
    );
  }
}

export default App;
