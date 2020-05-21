import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import WeatherNavigation from "./Navigation/WeatherNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    avenirBook: require("./assets/fonts/AvenirLTStd-Book.ttf"),
    avenirMedium: require("./assets/fonts/AvenirLTStd-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <NavigationContainer>
    <WeatherNavigation />
  </NavigationContainer>;
}
