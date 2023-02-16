import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
// import Logo from "../../assets/synced-icon.png";
import Logo from "../../assets/purple-icon5.png";

const purpleMain = "#743FB3";
const purpleSecondary = "#FDF6FF";

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    // flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: purpleSecondary,
  },
  appInfo: {
    width: "75%",
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 150,
  },
  name: {
    fontFamily: "Helvetica Neue",
    fontSize: 40,
    color: purpleMain,
    fontWeight: "100",
    marginTop: 20,
  },
  desc: {
    textAlign: "center",
    color: purpleMain,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Helvetica Neue",
  },
  loginBtn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: purpleMain,
  },
  loginBtnText: {
    color: purpleMain,
  },
  registerBtn: {
    backgroundColor: purpleMain,
  },
  registerBtnText: {
    color: "#FFF",
  },
});

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.appInfo}>
        <Image source={Logo} style={styles.icon} resizeMode="contain"></Image>
        <Text style={styles.name}>fs.synced()</Text>
        <Text style={styles.desc}>
          Take more control and manage your messages all in one place.
        </Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate("Login")}
          underlayColor="#F6EEFF"
        >
          <View style={{ ...styles.button, ...styles.loginBtn }}>
            <Text style={{ ...styles.buttonText, ...styles.loginBtnText }}>
              Login
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={{ ...styles.button, ...styles.registerBtn }}>
            <Text style={{ ...styles.buttonText, ...styles.registerBtnText }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;
