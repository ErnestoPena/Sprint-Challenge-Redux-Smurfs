import React from 'react';
import './smurf.css'

function Smurfs(props) {
    return (
        <div className='smurf-cards'>
            <div className='smurf-name'>{props.smurfs.name}</div>
            <div className='other-data'>
                <p>{props.smurfs.age}</p>
                <p>{props.smurfs.height}</p>
            </div>
        </div>
    )
}

export default Smurfs;