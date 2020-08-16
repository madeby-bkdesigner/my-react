import React from 'react'

const input = (props) => {
    return <input
        type="text"
        onChange={props.changed}
        placeholder={props.age}
    />
}

export default input