import React, { Component } from 'react';
import "./SubmitMenu.css";
import axios from "axios";
import Button from "../Button/Button";
import Input from "../Input/Input";

class SubmitMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    submitKash = () => {
        if (this.state.input.trim() !== "") {
            if (this.state.input.toLowerCase().includes("kash")) {

                axios.post("/api/submitKash", {name: this.state.input})
                .then(result => {
                    console.log(result);
                    this.props.onSuccess();
                })
                .catch(err => console.error(err));

            } else this.props.onFail();
        } else this.props.onFail();
    }

    updateInput(evt) {
        this.setState({ input: evt.target.value });
    }

    render() {
        return (
            <div className="submitMenu">
                <Input className="submitPrompt" placeholder="Babblekash" onChange={evt => this.updateInput(evt)} />
                <Button className="submitButton" onClick={() => this.submitKash()}>Submit Portmankash</Button>
            </div>
        );
    }
}

export default SubmitMenu;