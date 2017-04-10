import {
	CREATE_CAMPUS,
	EDIT_CAMPUS,
	DELETE_CAMPUS
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

		case EDIT_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case DELETE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		default:
			return newState;

	}

	return newState;
}
