import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel/ChoicePanel";
import SubmitMenu from "./components/SubmitMenu/SubmitMenu";
import axios from "axios";
import { Alert } from "reactstrap";
import Leaderboard from './components/Leaderboard/Leaderboard';
import constants from "./constants";

class App extends Component {

	constructor() {
		super();
		this.state = {
			data: {
				left: null, right: null
			},
			alert: {
				color: "success",
				text: constants.ALERT_SUCCESS,
				isOpen: false
			}
		};
	}
	
	componentDidMount() {
		this.fetchKashes();
	}

	fetchKashes() {
		axios.post("/api/requestKash")
        .then((res) => {
			const s = this.state;
			s.data.left = res.data[0].name;
			s.data.right = res.data[1].name;
			this.setState(s);
        })
        .catch((error) => {
            console.error(error);
		});
	}

	openAlert(success) {
		const s = this.state;
		s.alert.isOpen = true;
		
		if (success) {
			s.alert.color = "success";
			s.alert.text = constants.ALERT_SUCCESS;
		} else {
			s.alert.color = "danger";
			s.alert.text = constants.ALERT_FAIL;
		}

		this.setState(s);
		this.hideAlert(3000);
	}

	resetChoices() {
		const s = this.state;
		s.data.left = s.data.right = null;

		this.setState(s);
		this.fetchKashes();
	}

	hideAlert(time) {
		setTimeout(() => {
			const s = this.state;
			s.alert.isOpen = false;
			this.setState(s);
		}, time);
	}

	render() {
		return (
			<div>
				<div className="App-header">
					<div className="App-center">
						<h1 className="App-title">KashMash</h1>
						<p className="App-intro">Lead your favorite portmankash to victory</p>
					</div>
					<SubmitMenu onSuccess={() => this.openAlert(true)} onFail={() => this.openAlert(false)} />
					<Leaderboard />
				</div>
				<Alert color={this.state.alert.color} isOpen={this.state.alert.isOpen}>{this.state.alert.text}</Alert>
				{ this.state.data.left
					? <ChoicePanel left={this.state.data.left} right={this.state.data.right} onSuccess={() => this.resetChoices()} />
					: <p className="App-intro">Loading</p> 
				}
			</div>
		);
	}
}

export default App;