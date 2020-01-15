import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import Axios from 'axios';
import config from './../config';

class Bars extends Component {
    

    render() {
        return (
            <div>
                <table class="table table-hover" id="myTable">
			<thead>
			<tr>
				<th>Ime Bara</th>
				<th>Ime Vlasnika</th>
				<th>Kontakt Vlasnika</th>
				<th>Lokacija</th>
			</tr>
		</thead>
			<tbody id="users-body">

			</tbody>
		</table>
            </div>
        )
    }
}

export default Bars;