import {
	CREATE_CAMPUS,
	UPDATE_CAMPUS,
	DELETE_CAMPUS,
	SET_CAMPUSES
} from '../constants';
import axios from 'axios';

export const create = campus => ({type: CREATE_CAMPUS, campus});
export const update = campus => ({type: UPDATE_CAMPUS, campus});
export const destory = campus => ({type: DELETE_CAMPUS, campus});
export const set = campuses => ({type: SET_CAMPUSES, campuses});

