import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/Main';
import CalendarScreen from '../screens/CalendarScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import NextEventsScreen from '../screens/ScreenNextEvents';
import AddEventScreen from '../screens/AddEventScreen';
import EditEventScreen from '../screens/EditEventScreen';  

import { createAppContainer } from 'react-navigation';

const WeatherNavigator = createStackNavigator({
    Main: MainScreen,
    Calendar: CalendarScreen,
    EventDetails: EventDetailsScreen,
    NextEvents: NextEventsScreen,
    AddEventScreen: AddEventScreen,
    EditEvent: EditEventScreen
});

export default createAppContainer(WeatherNavigator);