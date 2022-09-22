import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    //01- state
    // 04- data ta console a na kore setCountries set kore dewa
    const [countries, setCountries] = useState([]);

    // useEffetc-02
    useEffect(() => {
        // fetch api for dataload-03
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    // 06- retun dynamically set kore dewa
    // 07- dynamic data display dekhanor jonno App.js file componant er nam set kora
    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;