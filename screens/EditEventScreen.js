import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextBody from '../components/TextBody';

const EditEventScreen = () => {
    return (
        <View style={styles.screen}>
            <TextBody>Edit Event Screen</TextBody>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1665c1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditEventScreen;