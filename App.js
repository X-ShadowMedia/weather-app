import React, { useState } from 'react';
import { AppLoading } from 'expo';
import WeatherNavigation from './Navigation/WeatherNavigation';
import Font from 'expo-font';


const fetchFonts = () => {
  Font.loadAsync({
    'avenirBook': require('./assets/fonts/AvenirLTStd-Book.ttf'),
    'avenirMedium': require('./assets/fonts/AvenirLTStd-Medium.ttf'),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
      <WeatherNavigation />
  );
}