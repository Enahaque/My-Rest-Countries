import React, { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css';
const Country = () => {
    const[countries,setCountries]=useState([]);
    console.log(countries);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data =>setCountries(data));
    },[]);
    return (
        <div>
            <h3>My Rest Countries : {countries.length}</h3>
            <div className='country-container'>
            {
                countries.map(country =><CountryDetail
                    key={country.id}
                    country={country}
                ></CountryDetail>)
            }
            </div>
        </div>
    );
};

export default Country;