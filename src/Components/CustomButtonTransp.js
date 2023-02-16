import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#743FB3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "#743FB3",
    fontFamily: "Helvetica Neue",
  },
});

const CustomButtonTransp = ({ onPress, text }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#F6EEFF">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomButtonTransp;
