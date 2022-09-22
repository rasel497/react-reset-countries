import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './componants/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>


    </div>
  );
}

//01- create component
function LoadCountries() {
  //02- declaring state to save loaded data.
  const [countries, setCountries] = useState([]);
  //03- useEffect for data load
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  // main
  // UI te show korer jonno tag er vitior dynamically set kore lgbe
  return (
    <div className="">
      <h1>Visiting Every Country of the world!!</h1>
      <h3>Avilable Country: {countries.length}</h3>
      {/* now start set dynamically proper way using map */}
      {
        // {/* countries.map(country => <p>{country.name.common}</p>) */}
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)

      }

    </div>
  )
}

// create componant using .....props
function Country(props) {
  return (
    <div className="">
      <h2>Name: {props.name}</h2>
      <h4 style={{ color: 'blue' }}>Population: {props.population}</h4>

    </div>
  )
}


export default App;
