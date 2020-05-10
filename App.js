import React, { useState } from 'react';
import { AppLoading } from 'expo';
import WeatherNavigation from './Navigation/WeatherNavigation';
import { FontDisplay } from 'expo-font';


const fetchFonts = () => {
  Font.loadAsync({
    'avenirBook': {
      url: require('./assets/fonts/AvenirLTStd-Book.ttf'),
      fontDisplay: FontDisplay.FALLBACK,
    }
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