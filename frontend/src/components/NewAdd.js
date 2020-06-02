import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import GranappNavbar from './GranappNavbar';
import Axios from 'axios';
import config from './../config';
import Background from './Background';

class NewAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bar_name: '',
            bar_id: '',
            Image_url: '',
            bar: []
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

            Axios.get(`${config.BASE_URL}/public/bar/${this.state.bar_name}`).then(response => {

                this.setState({
                    bar: response.data
                });

            }).catch(error => {
                console.log(error.response);

            }).finally(() => {

              Axios.post(`${config.BASE_URL}/admin/add`,
                  { bar_name: this.state.bar_name, bar_id: this.state.bar_id, Image_url: this.state.Image_url, bar: this.state.bar },
                  { headers: { Authorization: jwtToken } }).then(response => {
                      console.log('Add successfully added.');
                      alert('Add successfully added.');
                      this.props.history.push('/adds');
                  }).catch(error => {
                      console.log(error.response);
                  }).finally(() => {
                      console.log('Request completed.');
                  });

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
                                    <Form.Control name='bar_name' onChange={this.handleChange} type="text" placeholder="Enter bar name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>ID:</Form.Label>
                                    <Form.Control name='bar_id' onChange={this.handleChange} type="text" placeholder="Enter bar ID" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Image:</Form.Label>
                                    <Form.Control name='Image_url' onChange={this.handleChange} type="text" placeholder="Enter image URL" />
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

export default NewAdd;
