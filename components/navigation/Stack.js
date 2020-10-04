import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: "#22223b",
				borderBottomColor: "#22223b",
				shadowColor: "#22223b",
			},
			headerTintColor: "#f2e9e4",
			headerBackTitleVisible: false,
		}}>
		<Stack.Screen name='Taps' component={Tabs} />
		<Stack.Screen name='Detail' component={Detail} />
	</Stack.Navigator>
);
