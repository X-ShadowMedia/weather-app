import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Touchable from "react-native-platform-touchable";
import { EVENTS } from "../data/DummyDataEvents";
import EventItem from "../components/EventItem";
import Title from "../components/Title";
import { connect } from "react-redux";

class EventsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  renderEvent = (item) => {
    // alert("Single item" + JSON.stringify(item));
    return (
      <EventItem
        onPressItem={() => {
          this.props.navigation.navigate("EventDetails", { event: item });
        }}
        time={item.time}
        title={item.title}
      />
    );
  };

  getSortedData = () => {
    let allNotes = this.props.notes;
    allNotes.sort(function (a, b) {
      return a.time - b.time;
    });
    let currentDate = new Date();

    if (this.props.title == "NEXT EVENTS") {
      let arrayToReturn = [];

      for (let i = 0; i < allNotes.length; i++) {
        console.log("Event" + JSON.stringify(allNotes[i]));
        if (
          allNotes[i].day.year >= currentDate.getFullYear() &&
          allNotes[i].day.day > currentDate.getDate() &&
          allNotes[i].day.month >= currentDate.getMonth() + 1
        ) {
          arrayToReturn.push(allNotes[i]);
        }
      }
      // alert("Arr" + JSON.stringify(arrayToReturn));

      // // alert("Arr" + JSON.stringify(arr));
      // arrayToReturn = allNotes;
      // this.setState({ count: arrayToReturn.length });
      return arrayToReturn;
    } else if (this.props.title == "TODAY'S EVENTS") {
      let arrayToReturn = [];

      for (let i = 0; i < allNotes.length; i++) {
        console.log("Event" + JSON.stringify(allNotes[i]));
        if (
          allNotes[i].day.year == currentDate.getFullYear() &&
          allNotes[i].day.day == currentDate.getDate() &&
          allNotes[i].day.month == currentDate.getMonth() + 1
        ) {
          arrayToReturn.push(allNotes[i]);
        }
      }
      // alert("Arr" + JSON.stringify(arrayToReturn));

      // // alert("Arr" + JSON.stringify(arr));
      // arrayToReturn = allNotes;
      // this.setState({ count: arrayToReturn.length });
      return arrayToReturn;
    }
  };

  render() {
    return (
      <View style={styles.body}>
        <Touchable onPress={this.props.onPressTitle}>
          <View>
            <Title>{this.props.title}</Title>
          </View>
        </Touchable>

        {this.getSortedData().length == 0 && (
          <View>
            <Text>No events found.</Text>
          </View>
        )}

        <FlatList
          style={{ height: this.getSortedData().length == 0 ? 0 : 100 }}
          keyExtractor={(item, index) => Math.random() + ""}
          data={this.getSortedData()}
          renderItem={({ item }) => this.renderEvent(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    // height: ,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    overflow: "hidden",
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log("STATE" + state);
  // Redux Store --> Component
  return {
    notes: state.noteReducer.notes,
  };
};

export default connect(mapStateToProps)(EventsBlock);
