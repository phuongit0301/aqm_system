import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div className="Login">
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home;
