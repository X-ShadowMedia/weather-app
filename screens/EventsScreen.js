import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';

const EventsScreen = ({ day, navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerLeft: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-close" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
            </TouchableWithoutFeedback>
        )
        })
    });

    console.log(day);

    return (
        <View style={styles.screen}>
            <TextBody>Events Screen</TextBody>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1665c1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EventsScreen;