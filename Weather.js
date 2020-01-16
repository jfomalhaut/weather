import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOpt = {
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4da0b0", "#D39D38"]
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#fff", "#6DD5FA", "#2980B9"]
	},
	Thunderstorm: {
		iconName: "",
		gradient: []
	}, 
	Drizzle: {
		iconName: "",
		gradient: []
	}, 
	Rain: {
		iconName: "",
		gradient: []
	}, 
	Snow: {
		iconName: "",
		gradient: []
	}, 
	Atmosphere: {
		iconName: "",
		gradient: []
	}, 
	Clouds: {
		iconName: "",
		gradient: []
	}, 
}

export default function Weather({temp, condition}) {
	return (
		<View style={st.container}>
			<StatusBar barStyle="light-content" />
			<LinearGradient
				colors={weatherOpt[condition].gradient}
				style={{ flex:1, padding: 15, alignItems: 'center', borderRadius: 5 }}>
				<View style={st.top}>
					<MaterialCommunityIcons color="white" size={150} name={weatherOpt[condition].iconName} />
					<Text style={st.temp}>{Math.round(temp)}°</Text>
				</View>
				<View style={st.bottom}>
					<Text style={st.temp}>{condition}</Text>
				</View>
			</LinearGradient>
		</View>
	)
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze"
	]).isRequired
}

const st = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center"
	},
	bottom: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		fontWeight: '400',
		color: 'white',
	}
});