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