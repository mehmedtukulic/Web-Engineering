import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Jumbotron>
            <h1>Number of users : <span style={{ color: '#157EFB' }}>8</span> </h1>
            <p>
                <Button variant="primary" as={NavLink} to='/products'>View Bars</Button>
            </p>
            </Jumbotron>
        </div>
    )
}

export default Home;
