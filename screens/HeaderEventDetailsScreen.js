import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderEventDetailsScreen = props => {
    return(
        <View style={styles.headerBody}>
        <TouchableOpacity style={styles.bodyLeft}>
            <Ionicons name="md-arrow-back" color="white" size={30} onPress={props.onPressBack}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bodyRight}>
            <Ionicons name="md-create" color="white" size={30} onPress={props.onPressEdit}/>
        </TouchableOpacity>
        </View>
    );
 }
const styles = StyleSheet.create({
    bodyLeft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: 10,
        marginBottom: 30
    },
    bodyRight: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        marginBottom: 30
    },
    headerBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default HeaderEventDetailsScreen;