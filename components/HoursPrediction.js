import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, ActivityIndicator } from 'react-native';

const HoursPrediction = ({ hour, temp, weather, icon, imageIcon }) => {

    let timestamp = hour;

    let unix_timestamp = hour;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);

    return(
        <View>
            <Text style={styles.Hour}>{hours}</Text>
            <Image source={{uri: imageIcon}} style={{width: 50, height: 50}} />
        </View>
    );
};

const styles = StyleSheet.create({
    Hour: {
        marginRight: 10 
    }
});

export default HoursPrediction;