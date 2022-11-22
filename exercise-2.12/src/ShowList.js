const ShowList = (props) => {

    //creates array that just has names to make counting length easier
    const filteredcountries = []

    {/* iterates through each part of array */ }
    {
        props.countries.map((subpart, i) => {
            // checks if search is included in country common name
            if (props.search !== '' && subpart.name.common.toLowerCase().includes(props.search.toLowerCase())) {
                filteredcountries.push(subpart.name.common)
            }
        }
        )
    }
    console.log("filter = ", filteredcountries)
    console.log("filter length = ", filteredcountries.length)

    if (filteredcountries.length === 1) {
        return (
            <div>
                {
                    props.countries.map((subpart, i) => {
                        // checks if search is included in country common name
                        if (props.search !== '' && subpart.name.common.toLowerCase().includes(props.search.toLowerCase())) {
                            return(
                                <div>
                                <h1 key={subpart.id}>{subpart.name.common}</h1>
                                <p key={subpart.id}>capital {subpart.capital} <br />
                                area {subpart.area}</p>
                                <p><strong>languages:</strong></p>
                                {console.log(subpart.languages)}
                               <ul> {Object.values(subpart.languages).map(function (name, index) {
                                        return <li key={index}>{name}</li>
                                    })}</ul><br />
                                <img src={subpart.flags.png} width="200"></img>
                            </div>
                            )
                        }
                    }
                    )
                }
            </div>
        )
    } else if (filteredcountries.length < 10) {
        return (
            <div>
                {filteredcountries.map(function (name, index) {
                    return <p key={index}>{name}</p>
                })}

            </div>
        )
    } else {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }


}

export default ShowList