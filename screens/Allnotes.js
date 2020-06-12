import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { deleteall, deleteNote } from "../Redux/Actions/noteActions";
import { TouchableOpacity } from "react-native-gesture-handler";

class Allnotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // alert(JSON.stringify(this.props.notes));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ height: "100%", backgroundColor: "red" }}
            data={this.props.notes}
            keyExtractor={() => Math.random() + "sss"}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.deleteNote(item.item.key);
                  }}
                  // onPress={() => {
                  //   this.props.deleteAll;
                  // }}
                >
                  <View style={{ height: 30, margin: 20 }}>
                    <Text>{JSON.stringify(item.item)}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      </View>
    );
  }
}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    deleteAll: () => dispatch(deleteall()),
    deleteNote: (key) => dispatch(deleteNote(key)),
  };
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    notes: state.noteReducer.notes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Allnotes);
