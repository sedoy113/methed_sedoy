
const API_KEY = 'a8d489300baecdab5ef5c65f1f9fa745';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = url => {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw `Что-то пошло не так ${response.status}`
		})

		.catch(err => console.error(err));
};


export const getTriends = async (type = 'all', period = 'week', page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`
	return await getData(url);
}

export const getTop = async (type, page = 1) => {
	const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
	return await getData(url);
}

export const getPopular = async (type, page = 1) => {
	const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}&page=${page}`;
	return await getData(url);
};

