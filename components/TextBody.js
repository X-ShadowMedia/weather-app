import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextBody = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'Avenir-book',
        fontSize: 15,
        color: 'white',
        justifyContent: 'flex-start',
        padding: 10
    }
});

export default TextBody;