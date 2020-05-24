import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextBody from '../components/TextBody';
import { Ionicons } from '@expo/vector-icons';

const EditEventScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-checkmark" size={30} style={{marginRight: 10}} onPress={() => navigation.navigate('EventDetails')} color="white" />
            </TouchableWithoutFeedback>
        ),
        headerLeft: () => (
            <TouchableWithoutFeedback>
              <Ionicons name="md-close" size={30} style={{marginLeft: 10}}  onPress={() => navigation.goBack()} color="white" />
            </TouchableWithoutFeedback>
        )
        })
    });

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