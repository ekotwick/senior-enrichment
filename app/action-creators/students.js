import {
	CREATE_STUDENT,
	UPDATE_STUDENT,
	DELETE_STUDENT,
	SET_STUDENTS
} from '../constants';
import axios from 'axios';

export const create = student => ({type: CREATE_STUDENT, student});
export const update = student => ({type: UPDATE_STUDENT, student});
export const destory = student => ({type: DELETE_STUDENT, student});
export const set = students => ({type: SET_STUDENTS, students});

