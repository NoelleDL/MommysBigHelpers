import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Chores from './chores';

class App extends Component {
  render() {
    return (
      <div>
        <Chores />
      </div>
    );
  }
}

export default App;
