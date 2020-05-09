import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import EventsBlock from '../components/EventsBlock';
import TempBlock from '../components/TempBlock';
import Header from '../components/Header';
import TextBody from '../components/TextBody';
import Title from '../components/Title';

const Main = props => {
    return(
      <View style={styles.screen}>
        <View style={styles.body}>

          <View style={styles.header}><Header onPressCalendar={() => {
            props.navigation.navigate({routeName: 'Calendar'}) 
          }}/></View>

          <TextBody>Main Page</TextBody>

          <View  style={styles.button}><Button title="Go to Event Detail" onPress={() => {
            props.navigation.navigate({routeName: 'EventDetails'});
          }}/></View>

          <View  style={styles.button}><Button title="Go to Next Events" onPress={() => {
            props.navigation.navigate({routeName: 'NextEvents'});
          }}/></View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    body: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    screen: {
      flex: 1,
      backgroundColor: '#1665c1',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header:{
        flex: 1,
        height: '5%',
        width: '100%',
        padding: 10,
        marginBottom: 30
    },
    button: {
      padding: 10,
    }
});

export default Main;