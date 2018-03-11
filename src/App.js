import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel";
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "Welt"
		}

		setTimeout(() => {
			this.setState({
				name: "Venus"
			})
		},2000);
	}

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
				<h2> Hallo {this.state.name}</h2>
				<p>{this.state.name.length}</p>
      </div>
    );
  }
}

export default App;
