import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-lightning-rainy",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Clear day",
    subtitle: "Let it go and go to park"
  }
}

export default function Weather({temp, condition, city}) {
  return (
    <View style={styles.weather}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.gradient}
      >
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons 
            size={90} 
            name={weatherOptions[condition].iconName} 
            color="white" 
          />
          <Text style={styles.weatherTemp}>{temp}</Text>
          <Text style={styles.weatherName}>{condition}</Text>
          <Text style={styles.weatherCity}>{city}</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.textTitle}>{weatherOptions[condition].title}</Text>
          <Text style={styles.textSubTitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
    "Smoke",
    "Fog",
    "Tornado"
  ]),
  city: PropTypes.string
}

const styles = StyleSheet.create({
  weather: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  gradient: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"yellow"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  weatherTemp: {
    fontSize: 50,
    color: "#fff"
  },
  weatherName: {
    fontSize: 20,
    color: "#fff"
  },
  weatherCity: {
    fontSize: 30,
    color: "#fff"
  },
  textTitle: {
    fontSize: 50,
    fontWeight: "200",
    color: "#fff"
  },
  textSubTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff"
  }
})