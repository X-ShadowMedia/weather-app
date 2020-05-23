import React from "react";
import { StyleSheet, View } from "react-native";
import TextBody from '../components/TextBody';
import Header from '../components/Header';

const TodayEventsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <View style={styles.header}><Header onPressCalendar={() => {
              props.navigation.navigate("Calendar") 
            }} onPressBack={() => {
              props.navigation.goBack();
            }}/></View>
        <TextBody>Today's Events Screen</TextBody>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#1665c1',
  },
  text: {
    fontSize: 150,
  },
  header: {
    flex: 1,
        height: '5%',
        width: '100%',
        padding: 10,
        marginBottom: 30
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  }
});

export default TodayEventsScreen;