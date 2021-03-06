import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import WeatherNavigation from "./Navigation/WeatherNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store/store";
import "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    avenirBook: require("./assets/fonts/AvenirLTStd-Book.ttf"),
    avenirMedium: require("./assets/fonts/AvenirLTStd-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <WeatherNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
