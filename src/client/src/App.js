import React, { Component } from 'react';
import './App.css';
import ChoicePanel from "./components/ChoicePanel";
import { DB_KASHES } from "./data/kashes";

class App extends Component {

	renderChoicePanel() {
		const c = this.randElNoDupes(DB_KASHES);
		return (
			<ChoicePanel left={c[0]} right={c[1]} />
		);
	}

	randElNoDupes(arr) {
		let i = this.randEl(arr);
		let j = i;
		while (i === j) j = this.randEl(arr);		
		return [i, j];
	}

	randEl(arr) {
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
