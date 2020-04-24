import React from 'react';
import {StyleSheet, Image} from 'react-native';
import EventsBlock from '../components/EventsBlock';
import TempBlock from '../components/TempBlock';
import TextBody from '../components/TextBody';
import Title from '../components/Title'

const Main = () => {
    return(
        <View>
        <EventsBlock>
        <Title>Today's Events</Title>
        <View style={styles.listItems}>
          <TextBody style={styles.item}>14:00   Pick Carol from School</TextBody>
          <TextBody style={styles.item}>17:00   Yoga in Loha Gym</TextBody>
          <TextBody style={styles.item}>20:00   Dinner with Joe at Francesco's</TextBody>
        </View>
      </EventsBlock>

      <EventsBlock>
        <Title>Next Events</Title>
        <View style={styles.listItems}>
          <TextBody style={styles.item}>14:00   Pick Carol from School</TextBody>
          <TextBody style={styles.item}>17:00   Spinning Class</TextBody>
          <TextBody style={styles.itemLast}>20:00   Business Meeting</TextBody>
          <View style={styles.arrow}><Image source={require('./assets/img/arrow.png')}/></View>
        </View>
      </EventsBlock>

      <TempBlock />
      </View>
    );
}

const styles = StyleSheet.create({
    listItems: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }, 
      item:{
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.4,
        paddingLeft: 30
      }, 
      itemLast: {
        width: '100%',
        paddingLeft: 30
      },
      arrow: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default Main;