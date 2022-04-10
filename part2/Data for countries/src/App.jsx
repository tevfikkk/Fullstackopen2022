import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => setCountries(res.data))
  }, [])

  // filter countries
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filterCountry.toLowerCase().trim())
  )

  return (
    <div>
      <Filter
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
      />
      <div>
        {filteredCountries.length <= 10 ? (
          <Countries filteredCountries={filteredCountries} />
        ) : (
          'Too many matches specify another filter'
        )}
      </div>
    </div>
  )
}

export default App
