const Notes = ({ person, deletePerson }) => {
  return (
    <li>
      <b>name:</b> {person.name} {person.number}{' '}
      <button onClick={() => deletePerson(person.id)}>Delete</button>
    </li>
  )
}

export default Notes
