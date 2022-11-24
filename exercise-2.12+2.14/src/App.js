import "./App.css"
import Filter from "./Filter"
import { useState, useEffect } from 'react'
import ShowList from "./ShowList.js"
import axios from 'axios'
import ShowWeather from "./Weather"

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />
      <ShowList search={search} countries={countries}/>
    </div>
  )
}

export default App