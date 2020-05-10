import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'avenir-medium',
        fontSize: 30,
        color: 'white'
    }
});

export default Title;