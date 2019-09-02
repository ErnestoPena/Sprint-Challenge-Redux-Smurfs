import axios from 'axios';


export const PULL_SMURF = 'FETCHING_SMURF';
export const PULL_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const PULL_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const ADD_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
	dispatch({ type: PULL_SMURF });
	axios
		.get(`http://localhost:3333/smurfs`)
		.then(res => dispatch({ type: PULL_SMURF_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: PULL_SMURF_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
	dispatch({ type: PULL_SMURF });
	axios
		.post(`http://localhost:3333/smurfs`, smurf)
		.then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};


export default getSmurfs 