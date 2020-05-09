import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';
import HeaderEventDetailsScreen from './HeaderEventDetailsScreen';

const EventDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                <View style={styles.header}><HeaderEventDetailsScreen onPressEdit={() => {
                    props.navigation.navigate({routeName: 'EditEvent'}) 
                }} onPressBack={() => {
                props.navigation.goBack();
                }}/>
                </View>
                <TextBody>Event Details Screen</TextBody>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1665c1'
    },
    body: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    header:{
        flex: 1,
        height: '5%',
        width: '100%',
        padding: 10,
        marginBottom: 30
    }
});

export default EventDetailsScreen;