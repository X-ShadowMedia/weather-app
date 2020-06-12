import React from "react";
import { View, StyleSheet } from "react-native";
import TextBody from "../components/TextBody";
import Touchable from "react-native-platform-touchable";

const EventItem = (props) => {
  return (
    <View style={styles.master}>
      <Touchable onPress={props.onPressItem}>
        <View style={styles.eventBody}>
          <View style={styles.eventContainer}>
            <TextBody style={styles.eventText}>{props.time}</TextBody>
            <TextBody style={styles.eventText}>{props.title}</TextBody>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    paddingBottom: "2%",
  },
  eventBody: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  eventContainer: {
    width: "100%",
    flexDirection: "row",
    margin: "2%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  eventText: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10%",
    color: "white",
  },
});

export default EventItem;
