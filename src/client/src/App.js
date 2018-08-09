import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel";
import { DB_KASHES } from "./data/kashes";

class App extends Component {

	renderChoicePanel() {

		const choice1 = this.randomEl(DB_KASHES);
		const choice2 = this.randomEl(DB_KASHES);

		return (
			<ChoicePanel left={choice1} right={choice2} />
		);
	}

	randomElNoDupes(arr) {
		const f = randomEl();
	}

	randomEl(arr) {
		return arr[Math.floor(Math.random()*arr.length)];
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
				{this.renderChoicePanel()}
			</div>
		);
	}
}

export default App;
