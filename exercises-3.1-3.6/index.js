
const express = require('express')
var responseTime = require('response-time')

const app = express()

app.use(express.json())

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

//random text on home page
app.get('/', (request, response) => {
  response.send('<h1>Hi Ginny!</h1>')
})


//get count of people in list + time count was requested
app.get('/info', (request, response) => {
  let count = persons.length
  let time = new Date().toUTCString()
  let string = "Phonebook has info for " + count + " people<br><br>" + time
  response.send(string)
})

//get all people in list
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

//get specific person in list
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

//delete person in list
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

//add person to list with random id
const generateId = () => {
  const maxId = Math.round(Math.random() * 1000)
  return maxId
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (!body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (persons.some(object => object.name === body.name)) {
    return response.status(400).json({
      error: 'name duplicate'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)