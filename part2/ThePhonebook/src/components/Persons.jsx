import React from 'react'
import Notes from './Notes'

const Persons = ({ filteredNames }) => {
  return (
    <div>
      <ul>
        {filteredNames.map(person => (
          <Notes key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  )
}

export default Persons
