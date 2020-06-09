import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { EVENTS } from '../data/DummyDataEvents'; //importación del array que contiene los eventos
import EventItem from '../components/EventItem';
import Title from '../components/Title';

//(3)

const EventsBlock = props => {
    const renderEvent = (itemData) => { //itemData es toda la información recogida por el FlatList, donde se pasan los props al EventItem
        return (
            <EventItem 
                time={itemData.item.time}
                description={itemData.item.description}
                id={itemData.item.id}
                onPressItem={props.onPressItemFinal}
            />
        );
    };


    //con el keyExtractor se pilla los ids de cada evento en el array iterando por cada uno de ellos, la data={EVENTS} sería el array en si y luego se llama a la función
    //renderEvent

    return (
        <View style={styles.eventBlock}>
                
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
    eventBlock: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        overflow: 'hidden'
    }
});

export default EventsBlock;