import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import TextBody from '../components/TextBody';
import HeaderCalendarScreen from './HeaderCalendarScreen';


const CalendarScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                <View style={styles.header}><HeaderCalendarScreen onPressAdd={() => {
                    props.navigation.navigate({routeName: 'AddEventScreen'}) 
                }} onPressBack={() => {
                props.navigation.goBack();
                }}/>
                </View>
                <TextBody>Calendar Screen</TextBody>
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

export default CalendarScreen;