import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { EVENTS } from '../data/DummyDataEvents';
import EventItem from '../components/EventItem';
import Title from '../components/Title';

const EventsBlock = props => {
    const renderEvent = (itemData) => {
        return (
            <EventItem 
                time={itemData.item.time}
                description={itemData.item.description}
                onPressItem={props.onPressItemFinal}
            />
        );
    };

    return (
        <View style={styles.body}>
                
                <Touchable onPress={props.onPressTitle}>
                <View>
                    <Title>{props.title}</Title>
                    </View>
                </Touchable>
                
            
            <FlatList  keyExtractor={(item, index) => item.id} data={EVENTS} renderItem={renderEvent} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        overflow: 'hidden'
    }
});

export default EventsBlock;