import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';

const NextEventsScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons name="md-calendar" size={30} style={{marginRight: 10}} onPress={() => navigation.navigate('Calendar')} color="white" />
        </TouchableWithoutFeedback>
    ),
    headerLeft: () => (
        <TouchableWithoutFeedback>
          <Ionicons name="md-arrow-back" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
        </TouchableWithoutFeedback>
    )
    })
});

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

export default NextEventsScreen;