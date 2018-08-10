import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel/ChoicePanel";
import SubmitMenu from "./components/SubmitMenu/SubmitMenu";
import axios from "axios";
import { Alert } from "reactstrap";
import Leaderboard from './components/Leaderboard/Leaderboard';


class App extends Component {

	constructor() {
		super();
		this.state = {
			data: {
				left: null, right: null
			},
			alert: {
				color: "success",
				text: "Added portmankash to database. Thanks for making the world a better place!",
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

	successSubmit() {
		const s = this.state;
		s.alert.isOpen = true;
		this.setState(s);

		this.hideAlert(3000);
	}

	choiceSubmit() {
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
					<SubmitMenu onSubmit={() => this.successSubmit()}/>
					<Leaderboard />
				</div>
				<Alert color={this.state.alert.color} isOpen={this.state.alert.isOpen}>{this.state.alert.text}</Alert>
				{ this.state.data.left
					? <ChoicePanel left={this.state.data.left} right={this.state.data.right} onSubmit={() => this.choiceSubmit()} />
					: <p className="App-intro">Loading</p> 
				}
			</div>
		);
	}
}

export default App;