import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
	return (
		<View style={st.container}>
			<StatusBar barStyle="dark-content" />
			<Text style={st.text}>Getting the fucking weather</Text>
		</View>
	);
}

const st = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: '#FDF6AA',
		paddingHorizontal: 30,
		paddingVertical: 100
		// alignItems: 'center'
	},
	text: {
		color:'#2c2c2c',
		fontSize: 30
	}
});

