import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import TextBody from './TextBody';
import Title from './Title';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import Touchable from 'react-native-platform-touchable';

const TempBlock = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setlongitude] = useState(null);
    const [temperature, setTemperature] = useState('0');
    const [weatherCondition, setWeatherCondition] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[city, setCity] = useState(null);

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
      
      fetch('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=a934bb6a3b87e7ac54ed10969b14d80b&units=metric')
        .then(res => res.json())
        .then(json => {
            let temperature = json.main.temp;
            setTemperature(temperature);

            let weatherCondition = json.weather[0].main;
            setWeatherCondition(weatherCondition);

            let city = json.name;
            setCity(city);

            let isLoading = false;
            setIsLoading(isLoading); 
            }
        )
    })();
  }, []);

    return (
        <View style={styles.body}>
            <View>
                <Touchable onPress={props.onPressLocation}>
                    <View>
                        <Title>{city}</Title>
                        <TextBody>{Math.round(temperature)}ºC</TextBody>
                        <TextBody>{weatherCondition}</TextBody>
                    </View>
                </Touchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }, 
    title: {
        fontSize: 37
    },
    column2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sun: {
        width: 100,
        height: 100
    },
    degrees: {
        fontSize: 50,
        marginBottom: -30
    },
    sky: {
        fontSize: 25
    }, 
    now: {
        width: 30,
        height: 30,
        marginTop: -10
    },
    column3_Item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3
    },
    column3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    column4: {
        marginTop: 5,
        marginBottom: -10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    points: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
        marginVertical: 5
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