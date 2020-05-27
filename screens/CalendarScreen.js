import React from 'react';
import {View, Button, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList } from 'react-native-calendars';


const CalendarScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-add" size={30} style={{marginRight: 10}} onPress={() => navigation.navigate('AddEventScreen')} color="white" />
            </TouchableWithoutFeedback>
        ),
        headerLeft: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-arrow-back" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
            </TouchableWithoutFeedback>
        )
        })
    });

    const vacation = {};
    const work = {};
    const social = {};
    const evento = {};
    const recordatorio = {};

    return (
        <View style={styles.screen}>
            <View style= {styles.calendar}>
                <CalendarList/>
            </View>


            {/* <View style={styles.body}>
                <TextBody>Calendar Screen</TextBody>
            </View> */}
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
    },
    calendar: {
        backgroundColor: '#8EC9FF'
    }
});

export default CalendarScreen;