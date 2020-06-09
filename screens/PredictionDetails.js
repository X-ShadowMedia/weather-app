import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import TextBody from '../components/TextBody';

const PredictionDetails = ({ data, navigation }) => {

    console.log(data);
    

    return(
       <View>
           <TextBody style={styles.text}>PredictionDetails</TextBody>
       </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
});

export default PredictionDetails;