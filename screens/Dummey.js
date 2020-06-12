import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class Dummey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [
        { name: "null" },
        { name: "null" },
        { name: "null" },
        { name: "null" },
        { name: "null" },
        { name: "null" },
        { name: "null" },
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
      </ScrollView>
    );
  }
}

export default Dummey;
