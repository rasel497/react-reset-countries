import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const { name, area, region, population } = props.country;

    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small> </p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;