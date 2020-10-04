import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Trend from "../../screens/Trend";
import Tv from "../../screens/Tv";
import Search from "../../screens/Search";
import Movie from "../../screens/Movie";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
	route?.state?.routeNames[route.state.index] || "Trend";

export default ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: getHeaderName(route),
		});
	});
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					let iconName = Platform.OS === "ios" ? "ios-" : "md-";
					if (route.name === "Movie") {
						iconName += "film";
					} else if (route.name === "TV") {
						iconName += "tv";
					} else if (route.name === "Search") {
						iconName += "search";
					} else if (route.name === "Trend") {
						iconName += "heart";
					}
					return (
						<Ionicons
							name={iconName}
							color={focused ? "#f2e9e4" : "#4a4e69"}
							size={26}
						/>
					);
				},
			})}
			tabBarOptions={{
				showLabel: false,
				style: {
					backgroundColor: "#22223b",
					borderTopColor: "#22223b",
				},
			}}>
			<Tabs.Screen name='Trend' component={Trend} />
			<Tabs.Screen name='Movie' component={Movie} />
			<Tabs.Screen name='TV' component={Tv} />
			<Tabs.Screen name='Search' component={Search} />
		</Tabs.Navigator>
	);
};
