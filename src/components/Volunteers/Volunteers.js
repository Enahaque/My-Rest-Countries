import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activities from '../Activities/Activities';

const Volunteers = () => {
    const[volunteers,setVolunteers]=useVolunteers();
    return (
        <div>
            <h1>All volunteers</h1>
            {
                volunteers.map(volunteer=><Activities
                    volunteer={volunteer}
                ></Activities>)
            }
        </div>
    );
};

export default Volunteers;