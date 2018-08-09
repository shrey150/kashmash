import React, { Component } from 'react';
import Choice from "./Choice";
import axios from "axios";

class ChoicePanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            choices: [
                {
                    value: props.left,
                    className: "choice"
                },
                {
                    value: props.right,
                    className: "choice"
                }
            ]
        };
    }

    handleClick(value) {
        const i = this.state.choices.findIndex(x => x.value === value);
        const j = this.returnOtherEl(i);
        const newChoices = this.state.choices;

        newChoices[i].className = "choice won";
        newChoices[j].className = "choice lost";

        this.setState({ choices: newChoices });

        axios.post("/api/reportMatch", {
            winner: newChoices[i].value,
            loser: newChoices[j].value
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    renderChoice(i) {

        const c = this.state.choices[i];

        return (
            <Choice
                className={c.className}
                onClick={() => this.handleClick(c.value)}
                value={c.value}
            />
        );
    }

    returnOtherEl(i) {
        return (i === 0 ? 1 : 0);
    }

    render() {
        return (
            <div className="choice-panel">
                {this.renderChoice(0)}
                <p>or</p>
                {this.renderChoice(1)}
            </div>
        );
    }
}

export default ChoicePanel;