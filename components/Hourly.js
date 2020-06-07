import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import TextBody from './TextBody';
import * as Location from 'expo-location';

const Hourly = props => {
    const [hourly, setHourly] = useState([]);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [temperature, setTemperature] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[city, setCity] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [iconSource, setIconSource] = useState(null);
    const [weatherCondition, setWeatherCondition] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);

      let latitude = props.latitude;
      let longitude = props.longitude;
      
      fetch('http://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=daily,minutely,current&APPID=aa7e1c9c36cb11e04c482580a6a369db&units=metric')
        .then(res => res.json())
        .then(json => {
            /*let weatherCondition = json.hourly[0].weather[0].main;
            setWeatherCondition(weatherCondition);
            console.log(temperature);
            */

            let isLoading = false;
            setIsLoading(isLoading); 
            }
        )
    })();
  }, []);

    let hourlyTxt = JSON.stringify(hourly);

    return(
        <ScrollView horizontal={true} style={Styles.containerHourly}>
            <View>
                <TextBody>{temperature}</TextBody>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    containerHourly: {
        marginHorizontal: 5
    }
});

export default Hourly;