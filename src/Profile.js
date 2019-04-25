import React, { Component } from 'react';

class Profile extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <img src="green.png"/>
      </div>
    );
  }
}

export default Profile;