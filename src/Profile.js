import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
class Profile extends Component {
  
  constructor(props) {
    super(props);
  }

  toast() {
    toast.notify('Hello world!')
  }

  render() {
    return (
      <div>
        <button onClick={this.toast}>{this.props.name}</button>
        <br/>
        <img src="green.png"/>
      </div>
    );
  }
}

export default Profile;