// import mongoose module
require('dotenv').config()
const express = require('express')
// var responseTime = require('response-time')

//use json parser middleware
const app = express()
app.use(express.json())

const Person = require('./models/person')

//middleware to allow requests from all origins
const cors = require('cors')
app.use(cors())

//middleware to show frontend static content
app.use(express.static('build'))

//install and use morgan middleware to track server requests
var morgan = require('morgan')
const person = require('./models/person')

const morganLogger = morgan(function (tokens, req, res) {
  //check if this is a post method
  var type = tokens.method(req, res)
  
  //trying to get name and number
  morgan.token('info', function (req) {
    return [ 
      req.body.name,
      req.bodynumber
    ]
  })

  app.use(morgan(':info'))

  if (type === "POST") {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      "name = ",
      JSON.stringify(req.body.name),
      "number = ",
      JSON.stringify(req.body.number)
    ].join(' ')

  } else {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }
})

app.use(morganLogger)

//random text on home page
app.get('/', (request, response) => {
  response.send('<h1>Hi Ginny!</h1>')
})


/* //get count of people in list + time count was requested
app.get('/info', (request, response) => {
  let count = Person.length
  let time = new Date().toUTCString()
  let string = "Phonebook has info for " + count + " people<br><br>" + time
  response.send(string)
}) */

//get all people in list
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

//get specific person in list
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})


//delete person in list
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//add person to list
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})