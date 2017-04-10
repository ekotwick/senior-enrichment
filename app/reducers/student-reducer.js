import {
	CREATE_STUDENT,
	UPDATE_STUDENT,
	DELETE_STUDENT,
	SET_STUDENTS
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

		case UPDATE_STUDENT:
			newState.selectedStudent // =;
			break;

		case DELETE_STUDENT: 
			newState.selectedStudent // =;
			newState.listedStudents // =;
			break;

		case SET_STUDENTS: 
			newState.selectedStudent // =;
			newState.listedStudents // =;
			break;

		default: 
			return newState;

	}

	return newState;

}

