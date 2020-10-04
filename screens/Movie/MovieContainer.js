import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../../api";
import MoviePresenter from "./MoviePresenter";

export default () => {
	const [movies, setMovies] = useState({
		loading: true,
		nowPlaying: [],
		popular: [],
		upcoming: [],
		nowPlayingError: null,
		popularError: null,
		upcomingError: null,
	});
	const getData = async () => {
		const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
		const [popular, popularError] = await movieApi.popular();
		const [upcoming, upcomingError] = await movieApi.upcoming();
		setMovies({
			loading: false,
			nowPlaying,
			popular,
			upcoming,
			nowPlayingError,
			popularError,
			upcomingError,
		});
	};
	useEffect(() => {
		getData();
	}, []);
	return <MoviePresenter refreshFn={getData} {...movies} />;
};
