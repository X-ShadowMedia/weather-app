import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextBody from './TextBody';

const EventsBlock = props => {
    return (
        <View style={styles.body}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }
});

export default EventsBlock;