import React, { Component } from 'react';
import Choice from "../Choice/Choice";
import axios from "axios";
import "./ChoicePanel.css";

class ChoicePanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            left: {
                value: props.left,
                className: "choice"
            },
            right: {
                value: props.right,
                className: "choice"
            }
        };
    }

    handleClick(value) {

        const s = this.state;
        let winner, loser;

        if (s.left.value === value) {
            s.left.className = "choice won";
            s.right.className = "choice lost";

            winner = s.left.value;
            loser = s.right.value;
        }
        else {
            s.left.className = "choice lost";
            s.right.className = "choice won";

            winner = s.right.value;
            loser = s.left.value;
        }

        this.setState(s);

        axios.post("/api/reportMatch", {
            winner: winner,
            loser: loser
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });

        this.props.onSubmit();
    }

    renderChoice(val) {

        const c = val === "left" ? this.state.left : this.state.right;

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
                {this.renderChoice("left")}
                <p className="choice-text">or</p>
                {this.renderChoice("right")}
            </div>
        );
    }
}

export default ChoicePanel;