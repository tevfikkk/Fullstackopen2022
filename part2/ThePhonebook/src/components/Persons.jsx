import Notes from './Notes'

const Persons = ({ filteredNames, deletePerson }) => {
  return (
    <div>
      <ul>
        {filteredNames.map(person => (
          <div>
            <Notes
              key={person.id}
              person={person}
              deletePerson={deletePerson}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Persons
