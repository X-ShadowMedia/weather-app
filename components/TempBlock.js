import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import TextBody from './TextBody';
import Title from './Title';
import * as Location from 'expo-location';
import HoursPrediction from './HoursPrediction';

const TempBlock = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setlongitude] = useState(null);
    const [temperature, setTemperature] = useState('0');
    const [weatherCondition, setWeatherCondition] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[city, setCity] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [iconSource, setIconSource] = useState(null);
    const [hours, setHours] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);

      let latitude = location.coords.latitude;
      let longitude = location.coords.longitude;
      setLatitude(latitude);
      setlongitude(longitude);
      
      fetch('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=aa7e1c9c36cb11e04c482580a6a369db&units=metric')
        .then(res => res.json())
        .then(json => {
            console.log('weather',json);
            let temperature = json.main.temp;
            setTemperature(temperature);

            let weatherCondition = json.weather[0].main;
            setWeatherCondition(weatherCondition);

            let city = json.name;
            setCity(city);

            let weatherIcon = json.weather[0].icon;
            setWeatherIcon(weatherIcon);

            let iconSource = 'http://openweathermap.org/img/w/'+weatherIcon+'.png';
            setIconSource(iconSource);

            let isLoading = false;
            setIsLoading(isLoading); 
            }
        )

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=daily,minutely&APPID=a934bb6a3b87e7ac54ed10969b14d80b&units=metric')
        .then(res => res.json())
        .then(json => {
            const hours = json.hourly.map(hours => ({
            hour: hours.dt,
            temp: hours.temp,
            weather: hours.weather[0].main,
            icon: hours.weather[0].icon,
            imageIcon: 'http://openweathermap.org/img/w/'+ hours.weather[0].icon +'.png'
        }));
        setHours(hours);
        console.log('hours', hours);
    });
    })();
  }, []);

  if(location == null){
      return(
        <ActivityIndicator size="small" color="#55f" />
      );
  }

    return (
        <View style={styles.body}>
            <View style={styles.currentWeather}>
                <Title style={{textTransform: 'uppercase'}}>{city}</Title> 
                    <View style={styles.weatherCondition}>
                        <View style={styles.weatherText}>
                            <TextBody style={styles.degrees}>{Math.round(temperature)}ºC</TextBody>
                            <TextBody style={styles.condition}>{weatherCondition}</TextBody>
                        </View>
                        <View style={styles.weatherIcon}>
                            <Image source={{uri: iconSource}} style={{width: 100, height: 100, marginTop: -10, marginHorizontal: 10, padding: 0}} />
                        </View>
                    </View>
            </View>
                <FlatList
                    horizontal
                    data={hours}
                    renderItem={({ item }) => <HoursPrediction {...item} />}
                    keyExtractor={(hour) => hours.dt}
                /> 
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 25
    }, 
    title: {
        fontSize: 37
    },
    weatherCondition: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    },
    weatherText: {
        marginHorizontal: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    degrees: {
        fontSize: 30
    },
    condition: {
        fontSize: 20
    },
    currentWeather: {
        alignItems: 'center'
    }
});

export default TempBlock;


/*
{
    "timestamp": 1590427212079,
    "mocked": false,
    "coords": {
        "altitude": 346.600006,
        "heading": 18.273912429809,
        "longitude": 2.0256252,
        "speed": 0.4863901436328888,
        "latitude": 41.5650841,
        "accuracy": 14.270000457763672
    } 
}


*/