import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel";
import './App.scss';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "Welt",
			counter: 0
		}
		this.changeName = this.changeName.bind(this);
		this.changeCounter = this.changeCounter.bind(this);
	}
	changeName(){
		this.setState({
			name: "Venus"
		})
	}
	changeCounter(){
		let nc = this.state.counter;
		nc += 1;
		this.setState({
			counter: nc
		})
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Welcome to React!!!</h2>
          <Button label="Klick mich!"></Button>
        </div>
				{/* Important note, this is not HTML.
					So the attributes you set here are used as props to render the component.
					That means "title" is not like a title-attribute in HMTL and can be placed/rendered out into another element.
				*/}
				<Panel heading="first titel" content="this is the first content"></Panel>
				<Panel heading="second titel">
					<Button label="Ich bin ein props.children"></Button>
				</Panel>
				<button onClick={this.changeName}>Verändere den Namen</button>
				<h2> Hallo {this.state.name}</h2>
				<p>{this.state.name.length}</p>
				<button onClick={this.changeCounter}>Count up</button>
				<p>Aktueller counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
