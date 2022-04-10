import { useState } from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({ filteredCountries }) => {
  const [showInfo, setShowInfo] = useState(true)
  return (
    <div>
      {filteredCountries.map(country => (
        <div>
          {showInfo ? country.name : <CountryInfo country={country} />}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? 'Show' : 'Hide'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Countries
