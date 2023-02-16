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
    backgroundColor: "#743FB3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "#FDF6FF",
    fontFamily: "Helvetica Neue",
  },
});

const CustomButtonFill = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonFill;
