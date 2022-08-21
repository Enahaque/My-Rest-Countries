import React from 'react';

const Activities = (props) => {
    const{name,flags,capital}=props.volunteer;
    return (
        <div style={{border:'2px solid yellow',borderRadius:'15px',margin:'15px'}}>
            
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>{capital}</h2>

        </div>
    );
};

export default Activities;