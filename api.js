import axios from "axios";

const TMDB_KEY = "1402d5343b055b76851e369bad1aa72e";

const apiRequest = (path, params) =>
	axios.get(`https://api.themoviedb.org/3${path}`, {
		params: {
			...params,
			api_key: TMDB_KEY,
		},
	});

const getApi = async (path, params = {}) => {
	try {
		const {
			data: { results },
			data,
		} = await apiRequest(path, params);
		return [results || data, null];
	} catch (e) {
		return [null, e];
	}
};

export const trendApi = {
	dayTrend: () => getApi("/trending/all/day"),
	weekTrend: () => getApi("/trending/all/Week"),
};

export const movieApi = {
	nowPlaying: () => getApi("/movie/now_playing"),
	popular: () => getApi("/movie/popular"),
	upcoming: () => getApi("/movie/upcoming", { region: "kr" }),
	search: (query) => getApi("/search/movie", { query }),
	movie: (id) => getApi(`/movie/${id}`),
};

export const tvApi = {
	today: () => getApi("/tv/airing_today"),
	thisWeek: () => getApi("/tv/on_the_air"),
	topRated: () => getApi("/tv/top_rated"),
	popular: () => getApi("/tv/popular"),
	search: (query) => getApi("/search/tv", { query }),
	show: (id) => getApi(`/tv/${id}`),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
