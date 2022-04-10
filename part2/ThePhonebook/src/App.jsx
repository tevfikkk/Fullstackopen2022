import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(err => console.log(err))
  }, [])

  // delete person
  const deletePerson = id => {
    if (window.confirm(`Are you sure you want to delete?`)) {
      personService.remove(id).then(returnedPerson => {
        persons.map(person => (person.id !== id ? person : returnedPerson))
      })
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  // filter
  const filteredNames = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase().trim())
  )

  // if has the same name
  const hasSameContact =
    persons.filter(
      person => person.name.toLowerCase() === newName.toLowerCase()
    ).length > 0

  // submit and newuser
  const onSubmit = e => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    hasSameContact
      ? alert(`${newName} is already added to phonebook`)
      : axios.post('http://localhost:3001/persons', personObject).then(res => {
          setPersons(persons.concat(res.data))
          setNewName('')
        })
    setNewnumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={onSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewnumber={setNewnumber}
      />
      <h2>Numbers</h2>
      <Persons deletePerson={deletePerson} filteredNames={filteredNames} />
    </div>
  )
}

export default App
