import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import Axios from 'axios';
import config from './../config';

class Bars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            producer: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addNewProduct = (event) => {
        event.preventDefault();
        Axios.post(`${config.BASE_URL}/public/items`, 
            { name: this.state.name, description: this.state.description, producer: this.state.producer }, 
            { headers: { Authoruzation: 'myJwtToken' } }).then(response => {
                console.log('Product successfully added.');
                alert('Product successfully added.');
                this.props.history.push('/products');
            }).catch(error => {
                console.log(error.response);
            }).finally(() => {
                console.log('Request completed.');
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={6}>
                        <Form onSubmit={this.addNewProduct}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control name='name' onChange={this.handleChange} type="text" placeholder="Enter product name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control name='description' onChange={this.handleChange} type="text" placeholder="Enter product description" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Producer:</Form.Label>
                                <Form.Control name='producer' onChange={this.handleChange} type="text" placeholder="Enter product producer" />
                            </Form.Group>

                            <Button variant="success" type="submit" onClick={this.addNewProduct}>
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

export default Bars;