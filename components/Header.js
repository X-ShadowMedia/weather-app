import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Header = props => {
    return(
        <View style={styles.body}>
            <Image source={require('../assets/img/icons8-calendar-24.png')} style={styles.calendar} />
        </View>
    );
 }
const styles = StyleSheet.create({
    body: {
        
        height: '5%',
        marginVertical: 20,
        padding: 20,
        height: 100,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: -50 
    }
});

export default Header;