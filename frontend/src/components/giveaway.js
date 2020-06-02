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
class Giveaway extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        Axios.get(`${config.BASE_URL}/public/giveaways`).then(response => {
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
            const { _id, day_name,bar_ids } = product //destructuring
            return (
                <tr key={_id}>
                    <td>{day_name}</td>
                    <td>{bar_ids}</td>
                </tr>
            )
        })
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
                            <th>Dan</th>
                            <th>Barovi</th>
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

export default Giveaway;
