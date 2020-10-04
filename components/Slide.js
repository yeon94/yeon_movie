import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { apiImage } from "../api";
import Poster from "./Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
	height: 100%;
	width: 100%;
	background-color: #22223b;
`;

const Content = styled.View`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	position: relative;
`;

const BG = styled.Image`
	height: 100%;
	width: 100%;
	opacity: 0.2;
	position: absolute;
`;

const PosterContainer = styled.View`
	position: absolute;
	right: 65%;
`;

const Data = styled.View`
	height: 100%;
	width: 50%;
	position: absolute;
	right: 0;
	display: flex;
	justify-content: center;
`;

const Title = styled.Text`
	display: block;
	color: white;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 20px;
`;

const Votes = styled.Text`
	color: white;
	opacity: 0.7;
	margin-bottom: 20px;
`;

const Overview = styled.Text`
	color: white;
	opacity: 0.7;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
	<Container>
		<Content>
			<BG source={{ uri: apiImage(backgroundImage) }} />
			<PosterContainer>
				<Poster url={poster} />
			</PosterContainer>
			<Data>
				<Title>{title}</Title>
				<Votes> RATE : {votes} / 10</Votes>
				<Overview>{overview}</Overview>
			</Data>
		</Content>
	</Container>
);

Slide.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string.isRequired,
	votes: PropTypes.number.isRequired,
	overview: PropTypes.string.isRequired,
};

export default Slide;
