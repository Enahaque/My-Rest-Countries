import React, { useEffect, useState } from 'react';
// import useVolunteers from '../../hooks/useVolunteers';
import Activities from '../Activities/Activities';

const Main = () => {
    // const[volunteers,setVolunteers]=useVolunteers();

    const[volunteers,setVolunteers]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>setVolunteers(data.slice(0,3)));
    },[]);

    return (
        <div>
            <h1>Main</h1>
            {
                volunteers.map(volunteer=><Activities
                    volunteer={volunteer}
                ></Activities>)
            }
        </div>
    );
};

export default Main;