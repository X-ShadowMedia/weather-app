import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const EventItem = props => {
    
    return(
        <View style={styles.master}>
            <TouchableNativeFeedback onPress={props.onPressItem}>
                <View style={styles.eventBody}>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventText}>{props.time}</Text>
                        <Text style={styles.eventText}>{props.description}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );
}

const styles = StyleSheet.create({
    master: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingBottom: '2%'
    },
    eventBody: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1       
    },
    eventContainer: {
        width: '100%',
        flexDirection: 'row',
        margin: '2%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10%',
        color: 'white'
    }
});

export default EventItem;
