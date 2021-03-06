import React, { Component } from 'react'
import DOM from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ReactTable from 'react-bootstrap-table'
import GranappNavbar from './GranappNavbar';
import Axios from 'axios';
import config from './../config';
//import 'react-bootstrap-table/css'
import './../App.css'
import Background from './Background';

//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class Bars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        Axios.get(`${config.BASE_URL}/public/bars`).then(response => {
            /* Use response.data to access the actual data */
            this.setState({
                products: response.data
            });
        }).catch(error => {
            /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
            console.log(error.response);
        }).finally(() => {
            /* finally() executes at the end of the request, regardless if it succeeded or not */
            console.log(`${this.state.products.length} items have been retrieved.`);
        });
    }

    renderTableData() {
        return this.state.products.map((product, index) => {
            const { _id, name, owner, contact, location, web_address, email_address } = product //destructuring
            return (
                <tr key={_id}>
                    <td>{name}</td>
                    <td>{owner}</td>
                    <td>{contact}</td>
                    <td>{location}</td>
                    <td>{web_address}</td>
                    <td>{email_address}</td>
                    <button type="button" class="btn btn-danger" onClick={() => this.deleteBar(_id)}>Delete</button>
                </tr>
            )
        })
    }

    deleteBar = (id) => {
        let products = this.state.products.filter(product => {
            return product._id !== id
        })
        this.setState({
            products: products
        })

        let jwtToken = window.localStorage.getItem("jwtToken");
        Axios.delete(`${config.BASE_URL}/admin/bar/${id}`,
            { headers: { Authorization: jwtToken } }).then(response => {
                console.log('Bar successfully removed.');
                alert('Bar successfully removed');
                //  this.props.history.push('/bars');
            }).catch(error => {
                console.log(error.response);
            }).finally(() => {
                console.log('Request completed.');
            });
    }

    renderTableHeader() {
        let header = Object.keys(this.state.products[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <GranappNavbar />
                <table class="table table-hover" id="myTable">
                    <thead>
                        <tr>
                            <th>Bar Name</th>
                            <th>Owner Name</th>
                            <th>Contact</th>
                            <th>Location</th>
                            <th>Web Address</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody id="users-body">
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Bars;
