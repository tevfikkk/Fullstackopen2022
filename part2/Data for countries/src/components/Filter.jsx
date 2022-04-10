const Filter = ({ filterCountry, setFilterCountry }) => {
  return (
    <div>
      find countries{' '}
      <input
        value={filterCountry}
        onChange={e => setFilterCountry(e.target.value)}
      />
    </div>
  )
}

export default Filter
