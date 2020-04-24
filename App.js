import React, {useState} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from './components/Header';
import ScreenNextEvents from './screens/ScreenNextEvents';
import Main from './screens/Main';
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
      <Main />
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
  }
});
