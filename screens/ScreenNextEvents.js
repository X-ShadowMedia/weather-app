import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TextBody from '../components/TextBody';
import Title from '../components/Title';
import EventsBlock from '../components/EventsBlock';

const ScreenNextEvents = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <TextBody>Next Events Screen</TextBody>
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

export default ScreenNextEvents;