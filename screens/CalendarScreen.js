import React from 'react';
import {View, Button, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
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

    const vacation = {key:'vacation', color: 'yellow'};
    const work = {key:'work', color: 'green'};
    const social = {key:'social', color: 'purple'};
    const evento = {key:'evento', color: 'red'};
    const recordatorio = {key:'recordatorio', color: 'blue'};

    return (
        <View style={styles.screen}>
            <View style= {styles.calendar}>
                <CalendarList onDayPress ={(day) => navigation.navigate('AddEventScreen')}>
                    
                    theme={{
                        backgroundColor: '#8ec9ff',
                        calendarBackground: '8ec9ff   '
                    }}
                    markedDates={{
                        '2019-06-01' : {dots: [vacation], marked: true, selected: true, selectedColor:'grey'}
                    }}
                    markingType={'multi-dot'}
                </CalendarList>
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
    },
    calendar: {
        backgroundColor: '#8EC9FF'
    }
});

export default CalendarScreen;