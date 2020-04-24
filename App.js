import React, {useState} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from './components/Header';
import TextBody from './components/TextBody';
import Title from './components/Title';
import EventsBlock from './components/EventsBlock';
import TempBlock from './components/TempBlock';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-medium': require('./assets/fonts/AvenirLTStd-Medium.otf'),
    'Avenir-book': require('./assets/fonts/AvenirLTStd-Book.otf'),
    'Avenir-roman': require('./assets/fonts/AvenirLTStd-Roman.otf')
  });
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded){
   return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
  }

  return (
    <View style={styles.screen}>

      <Header />

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
  screen: {
    flexDirection: 'column',
    backgroundColor: '#1665c1',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%'
  }, 
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
