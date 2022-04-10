import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('')
  const [filterName, setFilterName] = useState('')

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
