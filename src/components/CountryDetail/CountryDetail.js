import React from 'react';
import './CountryDetail.css';

const CountryDetail = (props) => {
    const{name,flags}=props.country;
    return (
        <div className='country-detail-container'>
            <h2>Let's Go :{name.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default CountryDetail;