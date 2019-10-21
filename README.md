# Weather Where
React Native

### 1. Expo
Expo with react native

### 2. React native JS
- Different component

### 3. React native CSS
- Camel case due to js object
- Cannot be haritate from parants component
- Different rule
   - FlexDirection colnum is default, can change row
   - Flex takes space available

### 4. Get Location
- **React Native** [https://facebook.github.io/react-native/docs/geolocation]
   ```
   navigator.geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);
   ```
- **Expo** [https://docs.expo.io/versions/latest/sdk/location/]
   - expo install expo-location

### 5. Get Temperature
- Added propTypes
- Added '&units=metric' at the end of API URL to change from farenheit to celcius
- Inside of setState put temperature data

### 6. Create Weather Object
```
const weatherOptions = {
  Clear: {
    iconName: "weather-lightning-rainy",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Clear day",
    subtitle: "Let it go and go to park"
  }
}
```
```
<StatusBar barStyle="light-content" />
```
```
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
```