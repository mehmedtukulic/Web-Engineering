import React from 'react';

import bg from '../img/bg.png'

import './background.css'

const Background = () => {
    return (
        <div className="background" style={{ backgroundImage: `url(${bg})` }}></div>
    );
};

export default Background;