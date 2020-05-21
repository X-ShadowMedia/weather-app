import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventsBlock from '../components/EventsBlock';


const Main = ({ props }) => {
  

    return(
      <View style={styles.screen}>
        <View style={styles.body}>

          <EventsBlock title="TODAY'S EVENTS" onPressTitle={() => {
            props.navigation.navigate({routeName: 'TodayEvents'})
          }} onPressItemFinal={() => {
            props.navigation.navigate({routeName: 'EventDetails'})
          }} />
          <EventsBlock title="NEXT EVENTS" onPressTitle={() => {
            props.navigation.navigate({routeName: 'NextEvents'})
          }} onPressItemFinal={() => {
            props.navigation.navigate({routeName: 'EventDetails'})
          }}/>
           
            
           
        </View>
        {/* <Icon 
            reverse 
            name='keyboard_arrow_down'
            type='material'
            onPress={goToScreenNextEvents}>

            </Icon> */}
      </View>
      
    );
};

const styles = StyleSheet.create({
    body: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    screen: {
      flex: 1,
      backgroundColor: '#1665c1',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header:{
        flex: 1,
        height: '5%',
        width: '100%',
        padding: 10,
        marginBottom: 30
    },
    button: {
      padding: 10,
    }
});



export default Main;