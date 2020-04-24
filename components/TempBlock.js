import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextBody from './TextBody';
import Title from './Title';

const TempBlock = () => {
    return (
        <View style={styles.body}>

            <Title style={styles.title}>Terrassa</Title>

            <View style={styles.column2}>
                <View>
                    <TextBody style={styles.degrees}>10º</TextBody>
                    <TextBody style={styles.sky}>Sunny</TextBody>
                </View>
                <Image source={require('../assets/img/sun.png')} style={styles.sun}/>
            </View>

            <View style={styles.column3}>
                <View style={styles.column3_Item}>
                    <TextBody>Now</TextBody>
                    <Image source={require('../assets/img/sun.png')} style={styles.now} />
                </View>
                <View style={styles.column3_Item}>
                    <TextBody>17</TextBody>
                        <Image source={require('../assets/img/pngwave.png')} style={styles.now} />
                    </View>
                <View style={styles.column3_Item}>
                    <TextBody>18</TextBody>
                        <Image source={require('../assets/img/overcast.png')} style={styles.now} />
                    </View>
                <View style={styles.column3_Item}>
                    <TextBody>19</TextBody>
                        <Image source={require('../assets/img/overcast.png')} style={styles.now} />
                    </View>
                <View style={styles.column3_Item}>
                    <TextBody>20</TextBody>
                        <Image source={require('../assets/img/overcast.png')} style={styles.now} />
                    </View>
                <View style={styles.column3_Item}>
                    <TextBody>21</TextBody>
                        <Image source={require('../assets/img/overcast.png')} style={styles.now} />
                    </View>
            </View>

            <View style={styles.column4}>
                <Image source={require('../assets/img/navigation.png')} style={styles.points} />
                <Image source={require('../assets/img/point.png')} style={styles.points} />
                <Image source={require('../assets/img/point.png')} style={styles.points} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }, 
    title: {
        fontSize: 37
    },
    column2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sun: {
        width: 100,
        height: 100
    },
    degrees: {
        fontSize: 50,
        marginBottom: -30
    },
    sky: {
        fontSize: 25
    }, 
    now: {
        width: 30,
        height: 30,
        marginTop: -10
    },
    column3_Item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3
    },
    column3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    column4: {
        marginTop: 5,
        marginBottom: -10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    points: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
        marginVertical: 5
    }
});

export default TempBlock;