import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextBody from './TextBody';
import Title from './Title';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

const TempBlock = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({maximumAge: 400});
      setLocation(location);
    })();
  });

  let locationText = 'Waiting..';
  if (errorMsg) {
    locationText = errorMsg;
  } else if (location) {
    locationText = JSON.stringify(location);
  }

    return (
        <View style={styles.body}>
            <View>
                <TouchableNativeFeedback onPress={props.onPressLocation}>
                    <TextBody>{locationText}</TextBody>
                </TouchableNativeFeedback>
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