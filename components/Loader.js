import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Loading = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Ltext = styled.Text`
	color: #f2e9e4;
`;

const Loader = ({ loading }) => (
	<Loading>
		<Ltext>Please Wait!</Ltext>
	</Loading>
);

Loader.Proptypes = {
	loading: PropTypes.bool.isRequired,
};

export default Loader;
