import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink , Link, withRouter} from 'react-router-dom';
import logo from './../img/logo.png'; 

const GranappNavbar = (props) => {
        return (
        <div id='granapp-navbar' style={{ marginBottom: '1rem' }}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={NavLink} to='/'>
                    <img 
                        src={logo}
                        height={30}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link activeStyle={{ color: '#ED5035' }} as={NavLink} exact to='/'>Home</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#ED5035' }} as={NavLink} exact to='/products'>Products</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#ED5035' }} as={NavLink} exact to='/products/add'>Add New Product</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#ED5035' }} as={NavLink} to='/demo'>Demo</Nav.Link>
                    </Nav>
                    
                    <Form inline className="justify-content-center">
                        <FormControl type="text" placeholder="Search for an item" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(GranappNavbar);