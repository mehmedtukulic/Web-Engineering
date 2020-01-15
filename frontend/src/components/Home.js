import React, { Component } from 'react'
import GranappNavbar from './GranappNavbar';
import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import config from './../config';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            numberOfBars: 0
        };
    }

    componentDidMount = () => {
        Axios.get(`${config.BASE_URL}/public/bars`).then(response => {
            /* Use response.data to access the actual data */
            this.setState({
                numberOfBars: response.data.length
            });
        }).catch(error => {
            /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
            console.log(error.response);
        }).finally(() => {
            /* finally() executes at the end of the request, regardless if it succeeded or not */
            console.log(`${this.state.numberOfBars} items have been retrieved.`);
        });
    }

    render(){
        return (
            <div>
                <GranappNavbar />
                <Jumbotron>
                <h1>Number of users : <span style={{ color: '#157EFB' }}>{this.state.numberOfBars}</span></h1>
                <p>
                    <Button variant="primary" as={NavLink} to='/bars'>View Bars</Button>
                </p>
                </Jumbotron>
            </div>
        )
    } 
}

export default Home;
