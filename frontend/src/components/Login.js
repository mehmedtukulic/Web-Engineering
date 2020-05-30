import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Button, Row} from 'react-bootstrap'
import axios from 'axios'
import config from './../config';
import { Redirect } from 'react-router-dom'
import Background from './Background';
import './login.css'

class Login extends Component {

    state = {
        email_address: '',
        password: ''
    }

    handleEmailChange = (e) => {
        this.setState({
            email_address: e.target.value,
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log("handling submit");
        
        axios.post(`${config.BASE_URL}/login`, this.state).then(response => {
            window.localStorage.setItem('jwtToken', response.data[0]);
          //  this.setState({ type: response.data[1] });
            if(response.data[1] === 'admin')
                this.props.history.push('/home');
          }).catch((error) => {
              console.log(error);
          }).finally(() => {
            console.log('Request completed.');
        });

    }

    render() {
        return (
            <>
                <Background />
                <div className="login-box">
                    <Form onSubmit = {this.handleSubmit} >
                        <Row className='justify-content-md-center'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange = {this.handleEmailChange} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Row>

                        <Row className='justify-content-md-center'>
                            <Form.Group className="w-100" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange = {this.handlePasswordChange} type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className='justify-content-md-center'>
                            <Button variant="primary" type="submit" onClick = {this.handleLogin}>
                                Login
                            </Button>
                        </Row>
                    </Form>
                </div>
            </>
        );
    }
}

export default Login;