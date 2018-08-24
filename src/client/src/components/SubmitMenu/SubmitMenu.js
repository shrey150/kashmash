import React, { Component } from 'react';
import "./SubmitMenu.css";
import axios from "axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoIosPaperPlane } from "react-icons/io";

class SubmitMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { input: "", modal: false };
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

        this.closeModal();
    }

    updateInput(evt) {
        this.setState({ input: evt.target.value });
    }

    openModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    closeModal = () => {
        this.setState({ modal: false });
    }

    render() {
        return (
            <div className="submitMenu">
                <div className="desktopSubmit">
                    <Input className="submitPrompt" placeholder="Babblekash" onChange={evt => this.updateInput(evt)} />
                    <Button className="submitButton" onClick={this.submitKash}>Submit Portmankash</Button>
                </div>
                <Button className="mobileSubmit" onClick={this.openModal}><IoIosPaperPlane /></Button>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Submit Portmankash</ModalHeader>
                    <ModalBody>
                        <Input className="mobilePrompt" placeholder="Babblekash" onChange={evt => this.updateInput(evt)} />
                    </ModalBody>
                    <ModalFooter>
                        <Button className="closeButton" onClick={this.submitKash}>Submit</Button>
                        <Button className="closeButton" onClick={this.closeModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SubmitMenu;