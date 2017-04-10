import {
	CREATE_STUDENT,
	EDIT_STUDENT,
	DELETE_STUDENT
} from '../constants';

const initialState = {
	selectedStudent: {},
	listedStudents: []
};

export default function (state=initialState, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case CREATE_STUDENT:
			newState.selectedStudent // =;
			newState.listedStudents // =;
			break;

		case EDIT_STUDENT:
			newState.selectedStudent // =;
			break;

		case DELETE_STUDENT: 
			newState.selectedStudent // =;
			newState.listedStudents // =;
			break;

		default: 
			return newState;

	}

	return newState;
	
}

