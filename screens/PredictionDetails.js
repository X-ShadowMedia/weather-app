import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import TextBody from '../components/TextBody';

const PredictionDetails = ({ route, navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-arrow-back" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
            </TouchableWithoutFeedback>
        )
        })
    });

    const { EventCity } = route.params;
    

    return(
       <View>
           <TextBody style={styles.text}>PredictionDetails: City: {JSON.stringify(EventCity)}</TextBody>
       </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
});

export default PredictionDetails;