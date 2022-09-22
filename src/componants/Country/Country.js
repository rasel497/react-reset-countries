import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'
const Country = (props) => {
    console.log(props.country.area);
    return (
        <div className='country'>

            <h2>Country Name: {props.country.name}</h2>
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <p>Area: {props.country.area}</p>
        </div>
    );
};

export default Country;