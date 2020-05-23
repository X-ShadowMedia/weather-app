import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import AddEventScreen from "../screens/AddEventScreen";
import CalendarScreen from "../screens/CalendarScreen";
import EditEventScreen from "../screens/EditEventScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import NextEventsScreen from "../screens/NextEventsScreen";
import TodayEventsScreen from "../screens/TodayEventsScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: "#1665c1",
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
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{title: 'Home Screen'}} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
      <Stack.Screen name="NextEvents" component={NextEventsScreen} />
      <Stack.Screen name="AddEventScreen" component={AddEventScreen} />
      <Stack.Screen name="EditEvent" component={EditEventScreen} />
      <Stack.Screen name="TodayEvents" component={TodayEventsScreen} />
    </Stack.Navigator>
  );
};

export default WeatherNavigation;
