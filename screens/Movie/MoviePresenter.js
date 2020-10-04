import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, Text } from "react-native";
import ScrollContainer from "../../components/ScrollContainer";
import Slide from "../../components/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
	width: 100%;
	height: ${HEIGHT / 3}px;
	margin-bottom: 40px;
`;

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
	<ScrollContainer refreshFn={refreshFn} loading={loading}>
		<>
			<SlideContainer>
				<Swiper controlsEnabled={false} loop timeout={3}>
					{nowPlaying.map((movie) => (
						<Slide
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							overview={movie.overview}
							votes={movie.vote_average}
							backgroundImage={movie.backdrop_path}
							poster={movie.poster_path}
						/>
					))}
				</Swiper>
			</SlideContainer>
			<Container>
				<HorizontalSlider title={"Popular Movies"}>
					{popular.map((movie) => (
						<Vertical
							id={movie.id}
							key={movie.id}
							poster={movie.poster_path}
							title={movie.title}
							votes={movie.vote_average}
						/>
					))}
				</HorizontalSlider>
				<List title={"Coming soon"}>
					{upcoming.map((movie) => (
						<Horizontal
							key={movie.id}
							id={movie.id}
							title={movie.title}
							releaseDate={movie.release_date}
							poster={movie.poster_path}
							overview={movie.overview}
						/>
					))}
				</List>
			</Container>
		</>
	</ScrollContainer>
);
