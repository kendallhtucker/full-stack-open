const Filter = (props) => {

    // event handler that tracks what's searched
    const handleSearchChange = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <div>
            <p>find countries <input
                value={props.search}
                onChange={handleSearchChange}
            /></p>
        </div>
    )
}

export default Filter