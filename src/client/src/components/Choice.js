import React, { Component } from "react";
import "./Choice.css";

class Choice extends Component {

    render() {

        return (
            <div className={this.props.className} onClick={() => this.props.onClick()}>{this.props.value}</div>
        );
    }

}

export default Choice;