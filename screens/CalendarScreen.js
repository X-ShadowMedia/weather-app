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

    
    const work = {key:'work', color: 'green'};
    const social = {key:'social', color: 'purple'};
    const evento = {key:'evento', color: 'red'};
    const recordatorio = {key:'recordatorio', color: 'blue'};

    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};

    return (
        <View style={styles.screen}>
            <View style= {styles.calendar}>
            <CalendarList
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 350
                  }}
                  theme={{
                    backgroundColor: '#fff',
                    calendarBackground: '#fff',
                    selectedDayBackgroundColor: '#00adf5'
                  }}
                  onDayPress={(day) => navigation.navigate('AddEventScreen')}
                  markingType={'multi-dot'}
                  markedDates={{
                    '2020-06-08': {
                      selected: true,
                      dots: [
                        {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
                        {key: 'evento', color: 'red', selectedDotColor: 'white'}
                      ]
                    },
                    '2020-06-09': {
                      disabled: true,
                      dots: [
                        {key: 'vacation', color: 'green', selectedDotColor: 'red'},
                        {key: 'evento', color: 'red', selectedDotColor: 'green'}
                      ]
                    }
                  }}
                  
            />
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