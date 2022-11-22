import { useState } from 'react'
import React from 'react'

const AddNew = (props) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    // what happens on submit (name and number get added to array)
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }

        //check if name is already in list
        if (props.list.some(object => object.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            props.setlist(props.list.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    // event handler that tracks what's written in name box
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    // event handler that tracks what's written in number box
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )

}

export default AddNew