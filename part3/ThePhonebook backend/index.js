require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const Person = require('./models/mongo')

const app = express()

// json-parser
app.use(express.json())
app.use(morgan('tiny'))

app.use(express.static('dist'))

app.use(cors()) //

app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      JSON.stringify(req.body),
    ].join(' ')
  })
)

// get all persons
app.get('/api/persons', (req, res) => {
  Person.find({}).then(person1 => {
    res.json(person1)
  })
})

// get specific person
app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
})

// delete a person
app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id
  const person = persons.find(person => person.id === id)

  if (!person) {
    return res.status(404).json({
      message: 'No person found',
    })
  }

  persons = persons.filter(person => person.id !== id)

  res.status(202).json(person).end()
})

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0

  return maxId + 1
}

// create new person
app.post('/api/persons', (req, res) => {
  const body = req.body

  // Validation
  if (body.content === undefined) {
    return res
      .status(404)
      .json({ error: 'you didnt prodive the name or number' })
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  // find if user already exists
  const personExists = persons.find(({ name }) => name === body.name)

  if (personExists) {
    return res.status(404).json({
      message: 'Person already exists',
    })
  }

  newPerson.save().then(savedPerson => {
    res.json(savedPerson)
  })

  res.status(202).json({
    message: 'New person added',
    newPerson,
  })
})

// rough info page
app.get('/info', (req, res) => {
  res.send(`<h2>Phonebook has info for ${persons.length} people</h2>
  ${new Date()}`)
})

app.listen(PORT, () => {
  console.log(`Server's running on port ${PORT}`)
})
