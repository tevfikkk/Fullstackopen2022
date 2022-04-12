const express = require('express')
const morgan = require('morgan')
const PORT = 3001

const app = express()

// json-parser
app.use(express.json())
app.use(morgan('tiny'))

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

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

// get all persons
app.get('/api/persons', (req, res) => {
  res.send(persons)
})

// get specific person
app.get('/api/persons/:id', (req, res) => {
  const id = +req.params.id
  const person = persons.find(person => person.id === id)
  if (!person) {
    return res.status(404).json({
      message: 'Person is missing',
    })
  }

  res.send(person)
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

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  // Validation
  if (!body.name || !body.number) {
    return res
      .status(404)
      .json({ message: 'you didnt prodive the name or number' })
  }

  // find if user already exists
  const personExists = persons.find(({ name }) => name === body.name)

  if (personExists) {
    return res.status(404).json({
      message: 'Person already exists',
    })
  }

  console.log(personExists)

  persons = persons.concat(newPerson)

  res.status(202).json({
    message: 'New person added',
    newPerson,
  })
})

// rougly info page
app.get('/info', (req, res) => {
  res.send(`<h2>Phonebook has info for ${persons.length} people</h2>
  ${new Date()}`)
})

app.listen(PORT, () => {
  console.log(`Server's running on port ${PORT}`)
})
