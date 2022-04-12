const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2022-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2022-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2022-05-30T19:20:14.298Z',
    important: true,
  },
]

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0

  return maxId + 1
}

// json parser
app.use(express.json())

// creating a id | without the json-parser, the body property would be undefined
app.post('/api/notes', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing',
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  res.json(note)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// getting all ids
app.get('/api/notes', (req, res) => {
  res.json(notes)
})

// getting a specific id
app.get('/api/notes/:id', (req, res) => {
  const id = +req.params.id
  const note = notes.find(note => note.id === id)
  res.json(note)
})

// deleting a id
app.delete('/api/notes/:id', (req, res) => {
  const id = +req.params.id
  notes = notes.filter(note => note.id !== id)

  res.status(204).json({ meesage: 'Deleted' }).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
