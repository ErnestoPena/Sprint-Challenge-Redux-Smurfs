import React from 'react';
import './smurf.css';

const Smurf = props => {
	return (
		<div className="smurf-card">
			<div className="other-data">
                <p className="title">Name: {props.smurf.name}</p>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>

			</div>
		</div>
	);
};

export default Smurf;