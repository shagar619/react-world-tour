import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountries);

    // console.log(country);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <br />
            <button className='btn' onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            <button className='btn' onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {
                visited ? 'I have visited.' : 'I want to visit.'
            }

            <hr />
            <CountryDetail>
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default Country;