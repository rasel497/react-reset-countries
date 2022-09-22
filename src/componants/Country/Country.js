import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'
const Country = (props) => {
    console.log(props);
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;