import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios'; 
import Weather from './Weather';

const API_KEY = "07adcc580f37774a01c3d0894bc9e9c0";

export default class App extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async(lat, lng) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}&units=metric`;
    const { 
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(url);
    this.setState({ 
      isLoading: false, 
      temp,
      condition: weather[0].main
    });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "so sad"); 
    }
  }
  componentDidMount() { 
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? <Loading></Loading> : <Weather temp={temp} condition={condition}/>
    );
  }
}