import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel";
import SubmitMenu from "./components/SubmitMenu";
import axios from "axios";
import { Alert } from "reactstrap";


class App extends Component {

	constructor() {
		super();
		this.state = { left: null, right: null, successDisplayed: false };
	}
	
	componentDidMount() {
		axios.post("/api/requestKash")
        .then((res) => {
			this.setState({ left: res.data[0].name, right: res.data[1].name, successDisplayed: false });
			console.log(this.state);
        })
        .catch((error) => {
            console.error(error);
		});
	}

	successSubmit() {
		const s = this.state;
		s.successDisplayed = true;
		this.setState(s);
	}

	render() {
		return (
			<div>
				<div className="App-header">
					<div className="App-center">
						<h1 className="App-title">KashMash</h1>
						<p className="App-intro">Lead your portmankash to victory</p>
					</div>
					<SubmitMenu onSubmit={() => this.successSubmit()}/>		
				</div>
				{ this.state.successDisplayed ? <Alert color="success">Added portmankash to database. Thanks for making the world a better place!</Alert> : null }
				{ this.state.left ? <ChoicePanel left={this.state.left} right={this.state.right} /> : <p className="App-intro">Loading</p>}
			</div>
		);
	}
}

export default App;