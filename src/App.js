import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Chores from './chores';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <button type="button" class="btn btn-info btn-lg">Mom, please let me help!</button>
        <Chores />
        </div>
      </div>
    );
  }
}

export default App;
