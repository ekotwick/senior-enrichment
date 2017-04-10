import {
	CREATE_CAMPUS,
	UPDATE_CAMPUS,
	DELETE_CAMPUS,
	SET_CAMPUS
} from '../constants';

const initialState = {
	selectedCampus: {},
	listedCampuses: []
};

export default function (state=initialState, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case CREATE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case UPDATE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case DELETE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case SET_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		default:
			return newState;

	}

	return newState;
}
