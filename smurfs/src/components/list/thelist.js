import React from 'react';
import './list.css';
import Smurf from '../smurf/smurf';

function List(props) {
    return (
        <div className='list-holder'>
            {props.smurf.map(list => {
                return <Smurf smurf={list} key={list.id}/>
            })}
        </div>
    )

}


export default List;