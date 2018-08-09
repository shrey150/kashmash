import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel";
import axios from "axios";

class App extends Component {

	constructor() {
		super();
		this.state = null;
	}
	
	componentDidMount() {
		axios.post("/api/requestKash")
        .then((res) => {
			this.setState({ left: res.data[0].name, right: res.data[1].name });
			console.log(this.state);
        })
        .catch((error) => {
            console.error(error);
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">KashMash</h1>
					<p className="App-intro">
						Lead your favorite portmankash to victory
					</p>
				</header>
				{ this.state ? <ChoicePanel left={this.state.left} right={this.state.right} /> : <p>Loading</p>}
				<footer></footer>
			</div>
		);
	}
}

export default App;