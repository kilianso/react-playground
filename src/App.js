import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Welcome to React!!!</h2>
          <Button label="Klick mich!"></Button>
        </div>
				<Panel heading="first titel" content="this is the first content"></Panel>
				<Panel heading="second titel">
					<Button label="Ich bin ein in prop.chilren zu finden"></Button>
				</Panel>
      </div>
    );
  }
}

export default App;
