import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [Country,setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            {
                Country.map(country=> <div>
                    <h1>Country name : {country.name}</h1>
                    <h1>capital name : {country.capital}</h1>
                    <h1>nativeName name : {country.nativeName}</h1>
                    <h1>region name : {country.region}</h1>
                    <img src={country.flag} alt=""/>
                </div>)
            }           
        </div>
    );
};

export default CountryDetails;