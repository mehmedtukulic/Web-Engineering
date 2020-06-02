import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink , Link, withRouter} from 'react-router-dom';
import logo from './../img/shishalogo.jpg';

const GranappNavbar = (props) => {
        return (
        <div id='granapp-navbar' style={{ marginBottom: '1rem' }}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={NavLink} to='/home'>
                    <img
                        src={logo}
                        height={30}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/home'>Home</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/bars'>Bars</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/bars/add'>New Bar</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/adds'>Adds</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/adds/new'>New Add</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/giveaways'>Giveaways</Nav.Link>
                        <Nav.Link activeStyle={{ color: '#157EFB' }} as={NavLink} exact to='/giveaway/new'>New GiveAway</Nav.Link>
                    </Nav>

                    <Form inline className="justify-content-center">
                    <Button variant="primary" as={NavLink} to='/'>Log out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(GranappNavbar);
