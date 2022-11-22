
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import "./App.css"
import Filter from "./Filter"
import AddNew from "./addnew.js"
import ShowList from "./ShowList.js"

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />

      <AddNew list={persons} setlist={setPersons} />

      <ShowList search={search} persons={persons}/>

    </div>
  )
}

export default App
