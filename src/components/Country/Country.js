import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country.name.common)
    const { area, population, region, name, flags } = props.country
    return (
        <div className='country bg-warning'>
            <img src={flags.png} alt="" />
            <h1>Name: {name.common}</h1>
            <h2>Population: {population}</h2>
            <h3>Area:{area}</h3>
            <h3>Region: {region}</h3>
        </div>
    );
};

export default Country;