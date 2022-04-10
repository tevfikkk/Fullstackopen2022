import React from 'react'
import Countries from './Countries'

const CountryList = ({ countries, filterer }) => {
  // filter countries
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filterer.toLowerCase().trim())
  )

  return (
    <div>
      {filteredCountries.length <= 10
        ? filteredCountries.map(country => <Countries country={country} />)
        : 'Too many matches specify another filter'}
    </div>
  )
}

export default CountryList
