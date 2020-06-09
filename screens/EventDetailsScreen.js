import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';
import EventDetailBlock from '../components/EventDetailBlock';

const EventDetailsScreen = ({route, navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-create" size={30} style={{marginRight: 10}} onPress={() => navigation.navigate('EditEvent')} color="white" />
            </TouchableWithoutFeedback>
        ),
        headerLeft: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-arrow-back" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
            </TouchableWithoutFeedback>
        )
        })
    });

    const { EventId } = route.params;

    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                <TextBody>Event Details Screen</TextBody>
                <TextBody>Event ID: {JSON.stringify(EventId)}</TextBody>
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