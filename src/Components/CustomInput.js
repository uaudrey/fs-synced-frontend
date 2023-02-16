import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#743FB3",
  },
  input: {
    height: 30,
    margin: 8,
    padding: 10,
  },
});

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

export default CustomInput;
