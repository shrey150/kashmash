import React, {Component } from "react";
import "./Leaderboard.css";
import Button from "../Button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge } from "reactstrap";
import axios from "axios";
import { IoIosPodium } from "react-icons/io";

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
        this.setState({ modal: !this.state.modal });
    }

    closeModal = () => {
        this.setState({ modal: false });
    }

    render() {
        return (
            <div>
                <Button className="openButton" onClick={this.openModal}>
                    <span className="desktop-msg">Top Portmankashes</span>
                    <span className="mobile-msg"><IoIosPodium /></span>
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.closeModal}>
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