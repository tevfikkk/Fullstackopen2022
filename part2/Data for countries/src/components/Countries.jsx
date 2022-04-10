import { useState } from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div>
      {country.name}
      <CountryInfo country={country} showInfo={showInfo} />
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default Countries
