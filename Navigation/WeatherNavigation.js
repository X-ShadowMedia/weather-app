import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import React from 'react';
import MainScreen from '../screens/Main';
import CalendarScreen from '../screens/CalendarScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import NextEventsScreen from '../screens/ScreenNextEvents';
import AddEventScreen from '../screens/AddEventScreen';
import EditEventScreen from '../screens/EditEventScreen';
import TodayEventsScreen from '../screens/TodayEventsScreen'; 
import {Ionicons} from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: '#1665c1'
    }
};

const WeatherNavigator = createStackNavigator({
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
});

export default createAppContainer(WeatherNavigator);