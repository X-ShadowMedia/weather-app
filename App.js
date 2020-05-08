import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './Navigation/MealsNavigator';

const fetchFonts = () => {
  Font.loadAsync({
    'avenir-book': require('./assets/fonts/AvenirLTStd-Book.ttf'),
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <MealsNavigator/ >
  );
}