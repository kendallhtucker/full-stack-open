
import { useState, useEffect } from 'react'
import React from 'react'
import "./App.css"
import Filter from "./Filter"
import AddNew from "./addnew.js"
import ShowList from "./ShowList.js"
import peopleService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])


  return (
    <div>
      <Filter search={search} setSearch={setSearch} />

      <AddNew list={persons} setlist={setPersons} />

      <ShowList search={search} persons={persons} setPersons={setPersons}/>
      {console.log("persons = ", persons)}

    </div>
  )
}

export default App
