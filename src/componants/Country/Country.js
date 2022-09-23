import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'


const Country = (props) => {
    console.log(props.country);
    // const { name, area, region, population } = props.country;
    const { name, area, population, region, flags } = props.country;
    // console.log(props.country);

    return (
        <div className='country bg-warning'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            {/* <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small> </p>
            <p><small>Area: {area}</small></p> */}
        </div>
    );

};

export default Country;

// 46/8 9:32 sec