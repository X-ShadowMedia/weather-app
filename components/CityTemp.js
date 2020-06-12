import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import TextBody from "./TextBody";
import Title from "./Title";
import * as Location from "expo-location";
import HoursPrediction from "./HoursPrediction";

class TempBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      location: null,
      latitude: null,
      longitude: null,
      temperature: "0",
      weatherCondition: null,
      isLoading: true,

      weatherIcon: null,
      iconSource: null,
      hours: null,
    };
  }

  componentDidMount = async () => {
    // let { status } = await Location.requestPermissionsAsync();
    // if (status !== "granted") {
    //   setErrorMsg("Permission to access location was denied");
    // }
    // let location = await Location.getCurrentPositionAsync();
    // alert(JSON.stringify(this.props.location));
    this.setState({ location: this.props.location.item });

    this.setState({ latitude: this.props.location.item.coords.latitude });
    this.setState({ longitude: this.props.location.item.coords.longitude });
    this.getTemp();
    this.getHourData();
  };

  getTemp = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        this.props.location.item.coords.latitude +
        "&lon=" +
        this.props.location.item.coords.longitude +
        "&APPID=aa7e1c9c36cb11e04c482580a6a369db&units=metric"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("weather", json);
        this.setState({ temperature: json.main.temp });
        this.setState({ weatherCondition: json.weather[0].main });
        this.setState({ city: json.city });
        this.setState({ weatherIcon: json.weather[0].icon });
        this.setState({
          iconSource:
            "http://openweathermap.org/img/w/" +
            this.state.weatherIcon +
            ".png",
        });

        this.setState({ isLoading: false });
      });
  };

  getHourData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        this.props.location.item.coords.latitude +
        "&lon=" +
        this.props.location.item.coords.longitude +
        "&exclude=daily,minutely&APPID=a934bb6a3b87e7ac54ed10969b14d80b&units=metric"
    )
      .then((res) => res.json())
      .then((json) => {
        const hours = json.hourly.map((hours) => ({
          hour: hours.dt,
          temp: hours.temp,
          weather: hours.weather[0].main,
          icon: hours.weather[0].icon,
          imageIcon:
            "http://openweathermap.org/img/w/" + hours.weather[0].icon + ".png",
        }));
        // console.log("HOURS CITY : "+ JSON.stringify())
        this.setState({ hours: hours });
      });
  };

  render() {
    if (this.props.location == null) {
      return <ActivityIndicator size="small" color="#55f" />;
    } else {
      return (
        <View style={styles.body}>
          {/* <Text>{JSON.stringify(this.props.location)}</Text> */}
          <View style={styles.currentWeather}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Title style={{ textTransform: "uppercase", marginRight: 20 }}>
                {this.props.location.item.city}
              </Title>

              {this.props.hide == false && (
                <Text
                  onPress={this.props.removeCity}
                  style={{ textTransform: "uppercase" }}
                >
                  Remove
                </Text>
              )}
            </View>

            <View style={styles.weatherCondition}>
              <View style={styles.weatherText}>
                <TextBody style={styles.degrees}>
                  {Math.round(this.state.temperature)}ºC
                </TextBody>
                <TextBody style={styles.condition}>
                  {this.state.weatherCondition}
                </TextBody>
              </View>
              <View style={styles.weatherIcon}>
                <Image
                  source={{ uri: this.state.iconSource }}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: -10,
                    marginHorizontal: 10,
                    padding: 0,
                  }}
                />
              </View>
            </View>
          </View>
          <FlatList
            horizontal
            data={this.state.hours}
            renderItem={({ item }) => <HoursPrediction {...item} />}
            keyExtractor={(hour) => this.state.hours.dt}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    // backgroundColor: "red",
    // height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 37,
  },
  weatherCondition: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  weatherText: {
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: "center",
  },
  degrees: {
    fontSize: 30,
  },
  condition: {
    fontSize: 20,
  },
  currentWeather: {
    alignItems: "center",
  },
});

export default TempBlock;

/*
{
    "timestamp": 1590427212079,
    "mocked": false,
    "coords": {
        "altitude": 346.600006,
        "heading": 18.273912429809,
        "longitude": 2.0256252,
        "speed": 0.4863901436328888,
        "latitude": 41.5650841,
        "accuracy": 14.270000457763672
    } 
}


*/
