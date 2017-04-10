import {
	CREATE_STUDENT,
	UPDATE_STUDENT,
	DELETE_STUDENT,
	SET_STUDENTS
} from '../constants';
import axios from 'axios';

export const creatS = student => ({type: CREATE_STUDENT, student});
export const updatS = student => ({type: UPDATE_STUDENT, student});
export const destorS = student => ({type: DELETE_STUDENT, student});
export const seS = students => ({type: SET_STUDENTS, students});

export const createStudent = student => dispatch => {
	axios.post('/api/students', student)
		.then(res => dispatch(createS(res.data)))
		.catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
	axios.put(`/api/students/:${id}`, student)
		.then(res => dispatch(updateS(res.data)))
		.catch(err => console.error(`Updating student: ${student} unsuccessful`));
};

export const destroyStudent = id => dispatch => {
	dispatch(destroyS(id));
	axios.delete(`/api/students/${id}`)
		.catch(err => console.error(`Destroying student: ${student} unsuccessful`));
};

export const getAllStudents = () => dispatch => {
		axios.get('/api/students')
			.then(res => dispatch(setS(res.data)))
			.catch(err => console.error('Retrieving students unsuccessful', err));
};