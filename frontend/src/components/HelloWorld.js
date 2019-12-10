import React from 'react'

const HelloWorld = (props) => {
    return (
        <div>
            Hello, {props.name}.
            <p>React is cool.</p>
        </div>
    )
}

export default HelloWorld;