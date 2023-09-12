import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        
        console.log(country)
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry)
    }
    
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <div>
                <h4>Countries List that you have visited: {visitedCountry.length}</h4>
                <ul>
                {
                    visitedCountry.map((country) => (
                        <li key={country.cca3}>{country.name.common}</li>
                        ))
                }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} 
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;