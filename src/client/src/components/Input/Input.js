import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
    render() {
        return <input type="text" className={this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChange} />;
    }
}

export default Input;