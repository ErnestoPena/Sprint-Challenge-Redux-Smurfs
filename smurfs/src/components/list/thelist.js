import React from 'react';
import Smurf from '../smurf/smurf.js';
import './list.css';

const List = props => {
	return (
		<div className="list-holder">
			{props.smurfs.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</div>
	);
};
export default List;