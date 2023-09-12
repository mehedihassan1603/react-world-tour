import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country)
    const {name,population,flags} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited =() =>{
        setVisited(!visited);
    }
    
    // console.log(handleVisitedCountry)

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <h5>Population: {population}</h5>
            <div>
                <img src={flags?.png} alt="" />
            </div>
            <button onClick={() =>handleVisitedCountry(country)} className='btnBg'>Mark As Visited</button>
            <br />
            <br />
            <button onClick={handleVisited} className='btnBg'>{visited ? 'Visited' : 'Want to visit'}</button>
            {visited ? 'Visit Done' : ''}
        </div>
    );
};

export default Country;