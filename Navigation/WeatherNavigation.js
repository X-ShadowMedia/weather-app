import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import AddEventScreen from "../screens/AddEventScreen";
import CalendarScreen from "../screens/CalendarScreen";
import EditEventScreen from "../screens/EditEventScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import NextEventsScreen from "../screens/NextEventsScreen";
import TodayEventsScreen from "../screens/TodayEventsScreen";
import DummeyScreen from "../screens/Dummey";
import Button from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: "",
  },
};

const Stack = createStackNavigator();

/*{
    Main: { 
        screen: MainScreen,
        navigationOptions: {
            headerRight: 
        }
    },
    Calendar: CalendarScreen,
    EventDetails: EventDetailsScreen,
    NextEvents: NextEventsScreen,
    AddEventScreen: AddEventScreen,
    EditEvent: EditEventScreen,
    TodayEvents: TodayEventsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
}); */

const WeatherNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: "Weather",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{
          title: "Event Info",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="NextEvents"
        component={NextEventsScreen}
        options={{
          title: "Next Events",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="AddEventScreen"
        component={AddEventScreen}
        options={{
          title: "Add Event",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="EditEvent"
        component={EditEventScreen}
        options={{
          title: "Edit Event",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="TodayEvents"
        component={TodayEventsScreen}
        options={{
          title: "Today's Events",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Dum"
        component={DummeyScreen}
        options={{
          title: "Practice Screen",
          headerStyle: {
            height: 80,
            backgroundColor: "#1665c1",
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "avenirBook",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default WeatherNavigation;
