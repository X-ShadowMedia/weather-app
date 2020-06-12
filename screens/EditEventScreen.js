import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
  Modal,
  Text,
  ToastAndroid,
} from "react-native";
import TextBody from "../components/TextBody";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { saveNote, deleteNote, updateNote } from "../Redux/Actions/noteActions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class EditEventScreen extends Component {
  state = {
    title: "",
    time: "",
    desc: "",
    city: "Mumbai",
    key: "",
    day: 0,
    month: 0,
    year: 0,
    cityData: null,
    visible: false,
  };
  componentDidMount() {
    const { event } = this.props.route.params;
    this.setState({
      title: event.title,
      time: event.time,
      desc: event.desc,
      key: event.key,
      city: event.cityData.city,
      day: event.day.day,
      month: event.day.month,
      year: event.day.year,
    });
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-checkmark"
            size={30}
            style={{ marginRight: 10 }}
            onPress={() => this.onsave()}
            color="white"
          />
        </TouchableWithoutFeedback>
      ),
      headerLeft: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-close"
            size={30}
            style={{ marginLeft: 10 }}
            onPress={() => this.props.navigation.goBack()}
            color="white"
          />
        </TouchableWithoutFeedback>
      ),
    });
  }

  onsave = () => {
    let key = this.state.key;
    let day = {
      day: this.state.day,
      month: this.state.month,
      year: this.state.year,
    };
    let title = this.state.title;
    let desc = this.state.desc;
    let time = this.state.eventTime;
    let cityData = this.state.cityData;

    // props.saveNote(NoteObject);
    // this.props.saveNote(NoteObject);
    this.props.updateNote(key, day, title, desc, time, cityData);
    this.props.navigation.navigate("Main");
    ToastAndroid.show("Note updated sucessfully.", ToastAndroid.SHORT);
  };

  createTwoButtonAlert = () =>
    Alert.alert(
      "You want to delete this event ?",
      //   "Event can't be restored",
      "",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            this.props.deleteNote(this.state.key);
            this.props.navigation.navigate("Main");
          },
        },
      ],

      { cancelable: false }
    );

  render() {
    // const { event } = this.props.route.params;
    return (
      <View style={styles.screen}>
        <View style={styles.body}>
          <TextBody>Title :</TextBody>

          <TextInput
            value={this.state.title}
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            underlineColorAndroid="#ccc"
            style={{ paddingBottom: 10, paddingHorizontal: 5 }}
          ></TextInput>
        </View>
        <View style={styles.body}>
          <View style={{ flexDirection: "row" }}>
            <TextBody>Year : </TextBody>
            <TextInput
              value={this.state.year}
              onChangeText={(text) => {
                // this.setState({ time: text });
              }}
              underlineColorAndroid="#ccc"
              style={{ paddingBottom: 10, paddingHorizontal: 5 }}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextBody>Month : </TextBody>
            <TextInput
              value={this.state.month}
              onChangeText={(text) => {
                this.setState({ time: text });
              }}
              underlineColorAndroid="#ccc"
              style={{ paddingBottom: 10, paddingHorizontal: 5 }}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextBody>Day : </TextBody>
            <TextInput
              value={this.state.day}
              onChangeText={(text) => {
                this.setState({ time: text });
              }}
              underlineColorAndroid="#ccc"
              style={{ paddingBottom: 10, paddingHorizontal: 5 }}
            ></TextInput>
          </View>
        </View>

        <View style={styles.body}>
          <TextBody>Time : </TextBody>
          <TextInput
            value={this.state.time}
            onChangeText={(text) => {
              this.setState({ time: text });
            }}
            underlineColorAndroid="#ccc"
            style={{ paddingBottom: 10, paddingHorizontal: 5 }}
          ></TextInput>
        </View>
        <View style={styles.body}>
          <TextBody>About : </TextBody>
          <TextInput
            value={this.state.desc}
            onChangeText={(text) => {
              this.setState({ desc: text });
            }}
            underlineColorAndroid="#ccc"
            style={{ paddingBottom: 10, paddingHorizontal: 5 }}
          ></TextInput>
        </View>
        <View style={styles.body}>
          <TextBody>City : </TextBody>
          <TextInput
            value={this.state.city}
            onFocus={() => {
              this.setState({ visible: true });
            }}
            underlineColorAndroid="#ccc"
            style={{ paddingBottom: 10, paddingHorizontal: 5 }}
          ></TextInput>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="ios-trash"
            size={50}
            style={{ marginLeft: 10 }}
            onPress={() => this.createTwoButtonAlert()}
            color="white"
          />
        </View>
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

                let cityData = {
                  city: data.structured_formatting.main_text,
                  coords: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  },
                };

                this.setState({
                  cityData: cityData,
                  visible: false,
                  city: data.structured_formatting.main_text,
                });
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1665c1",
    justifyContent: "flex-start",
    // alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  body: {
    marginTop: 40,
    justifyContent: "flex-start",
    width: "100%",
  },
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // save note
    updateNote: (key, day, title, desc, time) =>
      dispatch(updateNote(key, day, title, desc, time)),
    // delete note
    deleteNote: (key) => dispatch(deleteNote(key)),
  };
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log("STATE" + JSON.stringify(state));
  // Redux Store --> Component
  return {
    notes: state.noteReducer.notes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventScreen);
