import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, ActivityIndicator } from 'react-native';

const HoursPrediction = ({ hour, temp, weather, icon, imageIcon }) => {
    return(
        <View>
            <Text style={styles.Hour}>{Math.round(hour)}</Text>
            <Text>{weather}</Text>
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