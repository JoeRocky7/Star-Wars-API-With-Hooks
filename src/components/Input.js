import React from 'react'

const Input = (props) => {

    return (
        <div>
            <input
                type="text"
                placeholder="Search Characters"
                onChange={(e) => props.characters(e.target.value)}
            />
        </div>
    )
}

export default Input