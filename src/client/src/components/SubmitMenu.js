import React, { Component } from 'react';
import "./SubmitMenu.css";
import axios from "axios";

class SubmitMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    submitKash = () => {
        axios.post("/api/submitKash", {name: this.state.input})
        .then(result => {
            console.log(result);
            this.props.onSubmit();
        })
        .catch(err => console.error(err));
    }

    updateInput(evt) {
        this.setState({ input: evt.target.value });
    }

    render() {
        return (
            <div className="submitMenu">
                <input className="submitPrompt" type="text" placeholder="Babblekash" onChange={evt => this.updateInput(evt)} />
                <button className="submitButton" onClick={this.submitKash}>Submit Portmankash</button>
            </div>
        );
    }
}

export default SubmitMenu;