
import { useState } from 'react'
import "./App.css"
import Filter from "./Filter"
import AddNew from "./addnew.js"
import ShowList from "./ShowList.js"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [search, setSearch] = useState('')

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />

      <AddNew list={persons} setlist={setPersons} />

      <ShowList search={search} persons={persons}/>

    </div>
  )
}

export default App
