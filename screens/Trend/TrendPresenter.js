import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, View, Dimensions } from "react-native";
import Slide from "../../components/Slide";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../../components/Loader";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
	flex: 1;
	background-color: #22223b;
	justify-content: space-around;
`;
const SlideAllContainer = styled.View`
	width: ${WIDTH}px;
	height: ${HEIGHT / 2}px;
	position: relative;
`;

const SlideContainer = styled.View`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Title = styled.Text`
	width: 50%;
	color: #f2e9e4;
	font-size: 20px;
	margin-left: 20px;
`;

const BtnArea = styled.View`
	display: flex;
	width: 120px;
	margin-left: 20px;
`;

const SwitchButton = styled.Text`
	color: #f2e9e4;
	width: 120px;
	height: 30px;
	background-color: #4a4e69;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`;

export default ({ loading, dayTrend, weekTrend }) => {
	const [trendValue, setTrendValue] = useState(dayTrend);
	const getData = () => {
		trendValue === dayTrend
			? setTrendValue(weekTrend)
			: setTrendValue(dayTrend);
		return trendValue;
	};

	const onStyle = {
		zIndex: 10,
	};

	return (
		<Container>
			{loading ? (
				<Loader loading={loading}></Loader>
			) : (
				<>
					<Title>{trendValue === dayTrend ? "Daily" : "Weekly"} Trend</Title>
					<SlideAllContainer>
						<SlideContainer style={trendValue === dayTrend ? onStyle : null}>
							<Swiper controlsEnabled={false} loop timeout={3}>
								{dayTrend.map((result) => (
									<Slide
										key={result.id}
										id={result.id}
										title={result.title ? result.title : result.original_name}
										votes={result.vote_average}
										overview={result.overview}
										backgroundImage={result.poster_path}
										poster={result.poster_path}
									/>
								))}
							</Swiper>
						</SlideContainer>
						<SlideContainer style={trendValue === weekTrend ? onStyle : null}>
							<Swiper controlsEnabled={false} loop timeout={3}>
								{weekTrend.map((result) => (
									<Slide
										key={result.id}
										id={result.id}
										title={result.title ? result.title : result.original_name}
										votes={result.vote_average}
										overview={result.overview}
										backgroundImage={result.poster_path}
										poster={result.poster_path}
									/>
								))}
							</Swiper>
						</SlideContainer>
					</SlideAllContainer>
					<BtnArea>
						<TouchableOpacity onPress={getData}>
							<SwitchButton>
								Go {trendValue === dayTrend ? "Week" : "Today"} Slide
							</SwitchButton>
						</TouchableOpacity>
					</BtnArea>
				</>
			)}
		</Container>
	);
};
