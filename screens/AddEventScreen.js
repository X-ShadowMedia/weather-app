import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  AsyncStorage,
  ToastAndroid,
  TextInput,
  Modal,
  Text,
  Keyboard,
} from "react-native";
import TextBody from "../components/TextBody";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { saveNote } from "../Redux/Actions/noteActions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePickerModal from "react-native-modal-datetime-picker";

class AddEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      eventTime: "",
      city: "",
      visible: false,
      cityData: null,
      timeVisible: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Ionicons
            name="md-checkmark"
            size={30}
            style={{ marginRight: 10 }}
            // onPress={() => navigation.navigate("Calendar")}
            onPress={() => this.saveNoteToRedux()}
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

  saveNoteToRedux = async () => {
    if (this.state.title == "") {
      ToastAndroid.show("Note Title Cant be empty", ToastAndroid.SHORT);
    } else if (this.state.eventTime == "") {
      ToastAndroid.show("Event time Cant be empty", ToastAndroid.SHORT);
    } else {
      let key = Math.random();
      let day = this.props.route.params.day;
      let title = this.state.title;
      let desc = this.state.desc;
      let time = this.state.eventTime;
      let cityData = this.state.cityData;

      // props.saveNote(NoteObject);
      // this.props.saveNote(NoteObject);
      this.props.saveNote(key, day, title, desc, time, cityData);
      ToastAndroid.show("Note saved sucessfully.", ToastAndroid.SHORT);
      this.props.navigation.navigate("Calendar");
    }
  };

  render() {
    return (
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 20 }}>
            <View style={{ marginVertical: 20 }}>
              <TextBody>New Event</TextBody>
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextBody>
                Date : {this.props.route.params.day.dateString}
              </TextBody>
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextBody>Title :</TextBody>
            </View>

            <TextInput
              value={this.state.title}
              onChangeText={(text) => this.setState({ title: text })}
              style={{ fontFamily: "avenirBook", fontSize: 16 }}
              placeholder="Enter title here"
              //   multiline={true}
            ></TextInput>

            <TextBody style={{ marginTop: 30, marginBottom: 20 }}>
              Event Time :
            </TextBody>

            <TextInput
              style={{ width: "100%", backgroundColor: "red" }}
              value={this.state.eventTime}
              keyboardType="decimal-pad"
              onChangeText={(text) => this.setState({ eventTime: text })}
              style={{ fontFamily: "avenirBook", fontSize: 16 }}
              placeholder="Enter time here"
              // multiline={true}
            ></TextInput>

            <View style={{ marginTop: 30 }}>
              <TextBody>Description :</TextBody>
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInput
                value={this.state.desc}
                onChangeText={(text) => this.setState({ desc: text })}
                style={{ fontFamily: "avenirBook", fontSize: 16 }}
                placeholder="Enter Description"
                multiline={true}
                //   numberOfLines={4}
              ></TextInput>
            </View>
            <View style={{ marginTop: 30 }}>
              <TextBody>City :</TextBody>
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInput
                editable={false}
                value={this.state.city}
                style={{ fontFamily: "avenirBook", fontSize: 16, width: 200 }}
                placeholder={
                  this.state.city == ""
                    ? "Select city from below"
                    : this.state.city
                }
              ></TextInput>
            </View>
          </View>
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
                  width: "70%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Search city name here
                </Text>
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
          {/* <TextBody>{JSON.stringify(route.params.day)}</TextBody> */}
        </ScrollView>
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
    alignItems: "flex-start",
  },
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    saveNote: (key, day, title, desc, time, cityData) =>
      dispatch(saveNote(key, day, title, desc, time, cityData)),
    // Decrease Counter
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen);
