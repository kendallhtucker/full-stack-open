import React from 'react'

const ShowList = (props) => {

    return (
        <div>
            <h2>Numbers</h2>
            {/* iterates through each part of array */}
            {props.persons.map((subpart, i) => {
                // checks if search is included in name
               if (subpart.name.includes(props.search)) {
                    return (
                        <p key={subpart.name}>
                            {subpart.name} {subpart.number}
                        </p>)
                } else if (props.search === "") {
                    return (
                        <p key={subpart.name}>
                            {subpart.name} {subpart.number}
                        </p>)
                } else {

                }
            }
            )}
        </div>
    )
}

export default ShowList