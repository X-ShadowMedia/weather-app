import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ToastAndroid,
  Modal,
  FlatList,
  Keyboard,
  Alert,
} from "react-native";
import EventsBlock from "../components/EventsBlock";
import TempBlock from "../components/TempBlock";
import CityTemp from "../components/CityTemp";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


class Main extends Component {
  state = {
    places: "",
    cities: [],
    visible: false,
    location: null,
  };

  componentDidMount = async () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-calendar"
            size={30}
            style={{ marginRight: 10 }}
            onPress={() => this.props.navigation.navigate("Calendar")}
            color="white"
          />
        </TouchableWithoutFeedback>
      ),
    });
  };

  removeCity = (removeItem) => {
    ToastAndroid.show("Removing Item", ToastAndroid.SHORT);
    // let cities = this.state.cities.filter((item) => {
    //   return this.state.cities.city !== removeItem.city;
    // });
    // this.setState({ cities: cities });
    let newArray = [];
    newArray = this.state.cities.filter((place) => {
      return place.city !== removeItem.item.city;
    });
    // newArray=this.state.cities.filter((item))
    this.setState({ cities: newArray });
  };

  render() {
    return (
      <View style={styles.screen}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ visible: true });
          }}
        >
          <View
            style={{
              height: 38,
              paddingHorizontal: 20,
              // marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                height: 38,
                paddingLeft: 30,
                borderColor: "transparent",
                borderBottomColor: "#ccc",
                borderWidth: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Search here</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="md-search"
                size={30}
                style={{ marginRight: 10 }}
                onPress={() => this.setState({ visible: true })}
                color="white"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
        >
          <View style={{ flex: 1, backgroundColor: "#1665c1", padding: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Search city name below
              </Text>
              <Ionicons
                name="md-close"
                size={30}
                style={{ marginRight: 10 }}
                onPress={() => this.setState({ visible: false })}
                color="white"
              />
            </View>
            <GooglePlacesAutocomplete
              onSubmitEditing={() => {
                alert("Submit pressed !!");
              }}
              placeholder="Search city "
              autoFocus={true}
              enablePoweredByContainer={false}
              query={{
                key: "AIzaSyCsMAC06Z6eCMCH4NIuQEYGcVS_Tel5CnA",
                language: "en", // language of the results
                types: "(cities)", // default: 'geocode'
              }}
              fetchDetails={true}
              onPress={(data, details) => {
                // alert(
                //   "Data : " +
                //     JSON.stringify(
                //       details.geometry.location.lat +
                //         "  ==  " +
                //         details.geometry.location.lng
                //     )
                // );
                let cities = this.state.cities;
                cities.push({
                  city: data.structured_formatting.main_text,
                  coords: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  },
                });
                this.setState({ cities: cities, visible: false });
              }}
              onFail={(error) => console.error("Error :::" + error)}
              // this in only required for use on the web. See https://git.io/JflFv more for details.
              styles={{
                textInputContainer: {
                  backgroundColor: "rgba(0,0,0,0)",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 38,
                  color: "#5d5d5d",
                  fontSize: 16,
                },
              }}
            />
          </View>
        </Modal>
        <ScrollView>
          <View style={styles.body}>
            <EventsBlock
              title="TODAY'S EVENTS"
              onPressTitle={() => {
                this.props.navigation.navigate("TodayEvents");
              }}
              navigation={this.props.navigation}
            />
          </View>
          <View style={styles.body}>
            <EventsBlock
              title="NEXT EVENTS"
              onPressTitle={() => {
                this.props.navigation.navigate("NextEvents");
              }}
              navigation={this.props.navigation}
            />
          </View>
          <View>
            <TempBlock location={this.state.location} />
          </View>
          <View
            style={{
              height: 190,
              width: "100%",
              // backgroundColor: "green",
              // marginBottom: 20,
            }}
          >
            <FlatList
              data={this.state.cities}
              keyExtractor={() => Math.random() + "ab"}
              renderItem={(item) => (
                <View style={{ width: "100%" }}>
                  <CityTemp
                    removeCity={() => {
                      this.removeCity(item);
                    }}
                    hide={false}
                    location={item}
                  ></CityTemp>
                </View>
              )}
            ></FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  screen: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#1665c1",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flex: 1,
    height: "5%",
    width: "100%",
    padding: 10,
    marginBottom: 30,
  },
  button: {
    padding: 10,
  },
});

export default Main;
