import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import GranappNavbar from './GranappNavbar';
import Axios from 'axios';
import config from './../config';
import Background from './Background';

class AddBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            owner: '',
            contact: '',
            location: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addNewBar = (event) => {
        event.preventDefault();
        let jwtToken = window.localStorage.getItem("jwtToken");
        Axios.post(`${config.BASE_URL}/admin/bar`,
            { name: this.state.name, owner: this.state.owner, contact: this.state.contact, location: this.state.location },
            { headers: { Authorization: jwtToken } }).then(response => {
                console.log('Bar successfully added.');
                alert('Bar successfully added.');
                this.props.history.push('/bars');
            }).catch(error => {
                console.log(error.response);
            }).finally(() => {
                console.log('Request completed.');
            });
    }

    render() {
        return (
            <div>
                <GranappNavbar />
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={6}>
                            <Form onSubmit={this.addNewBar}>
                                <Form.Group>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control name='name' onChange={this.handleChange} type="text" placeholder="Enter bar name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Owner:</Form.Label>
                                    <Form.Control name='owner' onChange={this.handleChange} type="text" placeholder="Enter owner name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contact:</Form.Label>
                                    <Form.Control name='contact' onChange={this.handleChange} type="text" placeholder="Enter bar contact" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Location:</Form.Label>
                                    <Form.Control name='location' onChange={this.handleChange} type="text" placeholder="Enter bar location" />
                                </Form.Group>

                                <Button variant="success" type="submit" onClick={this.addNewBar}>
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AddBar;