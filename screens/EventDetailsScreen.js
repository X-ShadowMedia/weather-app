import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import TextBody from "../components/TextBody";
import { Ionicons } from "@expo/vector-icons";
import CityTemp from "../components/CityTemp";

class EventDetailsScreen extends Component {
  state = { location: null };
  componentDidMount() {
    const { event } = this.props.route.params;
    // let item = {
    //   item: {
    //     coords: { longitude: event.longitude, latitude: event.latitude },
    //   },
    // };

    // let item = { item: event.cityData };
    // this.setState({ location: item });

    // alert(JSON.stringify(item));
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-create"
            size={30}
            style={{ marginRight: 10 }}
            onPress={() =>
              this.props.navigation.navigate("EditEvent", {
                event: this.props.route.params.event,
              })
            }
            color="white"
          />
        </TouchableWithoutFeedback>
      ),
      headerLeft: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-arrow-back"
            size={30}
            style={{ marginLeft: 10 }}
            onPress={() => this.props.navigation.goBack()}
            color="white"
          />
        </TouchableWithoutFeedback>
      ),
    });
  }

  render() {
    const { event } = this.props.route.params;
    let item = { item: event.cityData };
    return (
      <View style={styles.screen}>
        <View style={styles.body}>
          <TextBody>Title : {event.title}</TextBody>
        </View>
        <View style={styles.body}>
          <TextBody>
            Date : {event.day.year}-{event.day.month}-{event.day.day}
          </TextBody>
        </View>
        <View style={styles.body}>
          <TextBody>Time : {event.time}</TextBody>
        </View>
        <View style={styles.body}>
          <TextBody>City : {event.cityData.city}</TextBody>
        </View>
        <View style={styles.body}>
          <TextBody>About : {event.desc}</TextBody>
        </View>
        <CityTemp location={item} hide={true}></CityTemp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1665c1",
  },
  body: {
    paddingLeft: 20,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  header: {
    flex: 1,
    height: "5%",
    width: "100%",
    padding: 10,
    marginBottom: 30,
  },
});

export default EventDetailsScreen;
