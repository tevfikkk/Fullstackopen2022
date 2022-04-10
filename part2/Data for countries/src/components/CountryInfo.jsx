const CountryInfo = ({ country }) => {
  return (
    <>
      <div key={country.name}>
        <h2>{country.name}</h2>
        <p>
          <b>Capital City:</b> {country.capital}
        </p>
        <p>
          <b>Population: </b> {country.population}
        </p>
        <b>Languages:</b>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} width='30%' alt={country.name} />
      </div>
    </>
  )
}

export default CountryInfo
