import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextBody from '../components/TextBody';
import Title from '../components/Title';
import EventsBlock from '../components/EventsBlock';

const ScreenNextEvents = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <EventsBlock>
        <Title>Next Events</Title>
        <View style={styles.listItems}>
          <TextBody style={styles.item}>14:00   Pick Carol from School</TextBody>
          <TextBody style={styles.item}>17:00   Spinning Class</TextBody>
          <TextBody style={styles.itemLast}>20:00   Business Meeting</TextBody>
          <View style={styles.arrow}><Image source={require('../assets/img/arrow.png')}/></View>
        </View>
      </EventsBlock>

      <EventsBlock>
        <Title>+ Add Event</Title>
      </EventsBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f33',
  },
  text: {
    fontSize: 150,
  }
});

export default ScreenNextEvents;