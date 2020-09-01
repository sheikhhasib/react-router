import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] =useState([]);
    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h2>All Countries : {countries.length}</h2>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Countries;