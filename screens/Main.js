import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, FlatList } from 'react-native';
//import EventsBlock from '../components/EventsBlock';
import TempBlock from '../components/TempBlock';
import { Ionicons } from '@expo/vector-icons';
import EventItem from '../components/EventItem';
import { EVENTS } from '../data/DummyDataEvents';
import Title from '../components/Title';

const Main = ({props, navigation}) => {
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

  const RenderEvent = (itemData) => {
    return (
        <EventItem 
            time={itemData.item.time}
            description={itemData.item.description}
            onPressItem={() => {
              navigation.navigate('EventDetails', {
                EventId: itemData.item.id
              });
            }}
        />
    );
};

    return(
      <View style={styles.screen}>
        <View style={styles.body}>
          <View style={styles.eventBlock}>
                  <TouchableWithoutFeedback>
                      <View>
                          <Title>TODAY'S EVENTS</Title>
                      </View>
                  </TouchableWithoutFeedback>
              <FlatList  keyExtractor={(item, index) => item.id} data={EVENTS} renderItem={RenderEvent} /> 
          </View>  
          <View style={styles.eventBlock}>
                  <TouchableWithoutFeedback>
                      <View>
                          <Title>NEXT EVENTS</Title>
                      </View>
                  </TouchableWithoutFeedback>
              <FlatList  keyExtractor={(item, index) => item.id} data={EVENTS} renderItem={RenderEvent} /> 
          </View>
          <TempBlock onSelectWeather={() => {
            navigation.navigate('PredictionDetails');
          }}/>
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
    },
    eventBlock: {
      width: '100%',
      height: '25%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
      overflow: 'hidden'
  }
});



export default Main;