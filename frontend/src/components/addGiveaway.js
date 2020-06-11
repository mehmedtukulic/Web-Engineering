import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import GranappNavbar from './GranappNavbar';
import Axios from 'axios';
import config from './../config';
import Background from './Background';

class addGiveaway extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bar_name: '',
            day: '',
            status: 'active',
            winner: "TBA",
            competitors: []
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
      Axios.post(`${config.BASE_URL}/admin/giveaway`,
          { bar_name: this.state.bar_name, day: this.state.day, status: this.state.status, winner: this.state.winner, competitors: this.state.competitors},
          { headers: { Authorization: jwtToken } }).then(response => {
              console.log('Giveaway successfully added.');
              alert('Giveaway successfully added.');
              this.props.history.push('/giveaways');
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
                                    <Form.Label>Bar:</Form.Label>
                                    <Form.Control name='bar_name' onChange={this.handleChange} type="text" placeholder="Enter bar name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Day:</Form.Label>
                                    <Form.Control name='day' onChange={this.handleChange} type="text" placeholder="Enter Day Name" />
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

export default addGiveaway;
