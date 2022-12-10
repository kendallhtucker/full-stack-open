import React from 'react'
import peopleService from './services/persons'

const ShowList = (props) => {

    const toggleTrash = id => {   
        // find name based on id for confirmation
        const name = (props.persons.filter(word => word.id === id))[0].name

        // confirmation window
        if (window.confirm(`Delete ${name}?`) === true) {

        // erase and reset showall list
        peopleService
                .erase(id)
                .then(() => {
                    props.setPersons(props.persons.filter(word => word.id !== id))
                })
      }
    }

    return (
        <div>
            <h2>Numbers</h2>
            {/* iterates through each part of array */}
            {props.persons.map((subpart, i) => {
                // checks if search is included in name
                if (subpart.name.includes(props.search)) {
                    return (
                        <p key={subpart.name}>
                            {subpart.name} {subpart.number}{" "}
                           <button onClick={() => {toggleTrash(subpart.id)}}> delete</button>
                        </p>)
                }
            }
            )}
        </div>
    )
}

export default ShowList