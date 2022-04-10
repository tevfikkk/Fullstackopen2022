const Filter = ({ filterCountry, setFilterCountry }) => {
  return (
    <div>
      find countries{' '}
      <input
        value={filterCountry}
        onChange={e => setFilterCountry(e.target.value.toLowerCase())}
      />
    </div>
  )
}

export default Filter
