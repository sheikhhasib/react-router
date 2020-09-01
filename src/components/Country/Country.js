import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,nativeName,region} = props.country;
    const countryStyle = {
        border: '1px solid gray',
        borderRadius:'20px',
        margin: '20px',
        padding : '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name : {name}</h2>
            <h3>Capital of city : {capital}</h3>
            <h3>Native Name : {nativeName}</h3>
            <h3>region : {region}</h3>
            <Link to={`/country/${name}`}>
                <button>Click for Details</button>
            </Link>
        </div>
    );
};

export default Country;