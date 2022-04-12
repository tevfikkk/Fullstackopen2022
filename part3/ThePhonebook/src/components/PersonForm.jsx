const PersonForm = ({
  onSubmit,
  newName,
  setNewName,
  newNumber,
  setNewnumber,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name:
          <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number:{' '}
          <input
            value={newNumber}
            onChange={e => setNewnumber(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
