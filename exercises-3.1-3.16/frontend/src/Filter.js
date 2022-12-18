import React from 'react'

const Filter = (props) => {

    // event handler that tracks what's searched
    const handleSearchChange = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <p>filter shown with <input
                value={props.search}
                onChange={handleSearchChange}
            /></p>
        </div>
    )
}

export default Filter