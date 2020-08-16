import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i am {props.name} and i am {props.age} years old </p>
            <input type="text" onChange= {props.changed} placeholder={props.ph} />
        </div>
    )
}

export default person