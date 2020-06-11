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
            location: '',
            web_address: '',
            email_address: '',
            lat: '',
            lng: '',
            bar_logo: '',
            bar_image: '',
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
            { name: this.state.name, owner: this.state.owner, contact: this.state.contact, location: this.state.location, web_address: this.state.web_address, email_address: this.state.email_address, lat: this.state.lat, lng: this.state.lng, bar_logo: this.state.bar_logo , bar_image: this.state.bar_image },
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

                                <Form.Group>
                                    <Form.Label>Web Address:</Form.Label>
                                    <Form.Control name='web_address' onChange={this.handleChange} type="text" placeholder="Enter bar Web page" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email Address:</Form.Label>
                                    <Form.Control name='email_address' onChange={this.handleChange} type="text" placeholder="Enter bar Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Lattitude:</Form.Label>
                                    <Form.Control name='lat' onChange={this.handleChange} type="text" placeholder="Enter bar Lattitude" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Longitude:</Form.Label>
                                    <Form.Control name='lng' onChange={this.handleChange} type="text" placeholder="Enter bar Longitude" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Bar Logo</Form.Label>
                                    <Form.Control name='bar_logo' onChange={this.handleChange} type="text" placeholder="Enter bar logo url" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Bar Image</Form.Label>
                                    <Form.Control name='bar_image' onChange={this.handleChange} type="text" placeholder="Enter bar image url" />
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
