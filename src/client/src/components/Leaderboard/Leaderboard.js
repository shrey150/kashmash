import React, {Component } from "react";
import "./Leaderboard.css";
import Button from "../Button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge } from "reactstrap";
import axios from "axios";

class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            modal: false
        }
    }

    componentDidMount() {
        this.fetchTopKashes();
    }

    fetchTopKashes = () => {
        axios.post("/api/fetchTopKashes")
        .then(res => {
            const s = this.state;
            s.data = res.data;
            this.setState(s);
            console.log(res);
        })
        .catch(err => console.error(err));
    }

    openModal = () => {
        const s = this.state;
        s.modal = !this.state.modal;
        this.setState(s);
    }

    closeModal = () => {
        const s = this.state;
        s.modal = false;
        this.setState(s);
    }

    render() {
        return (
            <div>
                <Button className="openButton" onClick={this.openModal}>Top Portmankashes</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Top Portmankashes</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {this.state.data ? this.state.data.map(x => {
                                return (
                                    <ListGroupItem key={x.name}>
                                        {x.name}
                                        <Badge className="scoreBadge">{x.score}</Badge>
                                    </ListGroupItem>
                                );
                            }) : null}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="closeButton" onClick={this.closeModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Leaderboard;