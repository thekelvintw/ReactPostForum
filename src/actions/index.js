import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const Root_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLICK1234'   

export function fetchPost() {
	const request = axios.get(`${Root_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request

	}
}