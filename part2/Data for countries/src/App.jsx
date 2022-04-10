import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => setCountries(res.data))
  }, [])

  return (
    <div>
      <Filter
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
      />
      <CountryList countries={countries} filterer={filterCountry} />
    </div>
  )
}

export default App
