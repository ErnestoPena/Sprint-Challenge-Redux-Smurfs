import { PULL_SMURF, 
         PULL_SMURF_SUCCESS, 
         PULL_SMURF_FAILURE, 
         ADD_SMURF, 
         ADD_SMURF_SUCCESS, 	
         ADD_SMURF_FAILURE, } from '../actions/actions.js';

const initialState = {
	smurfs: [],
	isFetching: false,
	isAdding: false,
	error: 'no errors',
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case PULL_SMURF:
			return {
				...state,
				isFetching: true,
				error: 'no errors yet.',
			};
		case PULL_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
				error: 'no errors yet.',
			};
		case PULL_SMURF_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case ADD_SMURF:
			return {
				...state,
				isFetching: false,
				isAdding: true,
				error: 'no errors yet.',
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
				isAdding: false,
				error: 'no errors yet.',
			};
		case ADD_SMURF_FAILURE:
			return {
				...state,
				isFetching: false,
				isAdding: false,
				error: action.payload,
			};
		default:
			return state;
	}
};


export default Reducer;