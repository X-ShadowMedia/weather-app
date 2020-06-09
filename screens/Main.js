import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import EventsBlock from '../components/EventsBlock';
import TempBlock from '../components/TempBlock';
import { Ionicons } from '@expo/vector-icons';

const Main = ({navigation}) => {
   /* const goToScreenNextEvents = () => {
    navigation.navigate("NextEvents");
  };

  const goToScreenTodayEvents = () => {
    navigation.navigate("TodayEvents");
  };  */

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons name="md-calendar" size={30} style={{marginRight: 10}} onPress={() => navigation.navigate('Calendar')} color="white" />
        </TouchableWithoutFeedback>
      ) 
    })
  })

    return(
      <View style={styles.screen}>
        <View style={styles.body}>
          <EventsBlock title="TODAY'S EVENTS" onPressTitle={() => {
            navigation.navigate('TodayEvents')
          }} onPressItemFinal={() => {
            navigation.navigate('EventDetails')
          }} />
          <EventsBlock title="NEXT EVENTS" onPressTitle={() => {
            navigation.navigate('NextEvents')
          }} onPressItemFinal={() => {
            navigation.navigate('EventDetails')
          }}/>   
          
          <TempBlock />
           
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