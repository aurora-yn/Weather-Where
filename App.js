import React from "react";
import Alert from "react-native";
import Loading from "./Loading.js";
import Weather from "./Weather.js";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "548d0aded0d3190f2ace2c0873d8621c";

export default class App extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();

      // Send to APT and get weather
      this.getWeather(latitude, longitude);
      
    } catch (error) {
      Alert.alert("Where are you? Cannot fine you", "so sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;

  }
}