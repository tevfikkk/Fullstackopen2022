import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
      setPersons(res.data)
    })
  }, [])

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
      id: persons.length + 1,
    }
    hasSameContact
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject)),
      setNewName('')
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
      <Persons filteredNames={filteredNames} />
    </div>
  )
}

export default App
