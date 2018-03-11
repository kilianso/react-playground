import React, { Component } from 'react';
import Button from "./Button";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Welcome to React!!!</h2>
          <Button label="Klick mich!"></Button>
        </div>

        <Button label="Klick mich nicht!"></Button>
      </div>
    );
  }
}

export default App;
