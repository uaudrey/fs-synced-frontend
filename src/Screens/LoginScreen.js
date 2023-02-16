import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import CustomButtonFill from "../Components/CustomButtonFill";
import CustomButtonTransp from "../Components/CustomButtonTransp";
import bg from "../../assets/purple-icon5.jpg";
import { BackgroundImage } from "@rneui/base";

const purpleMain = "#743FB3";
const purpleSecondary = "#FDF6FF";

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  topContainer: {
    flex: 1,
  },
  bg: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    fontFamily: "Helvetica-Bold",
    fontSize: 28,
    color: purpleSecondary,
    fontWeight: "900",
    marginTop: 40,
    marginLeft: 15,
  },
  bottomContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  form: {
    width: "70%",
    marginTop: 30,
    marginBottom: 7,
  },
  input: {
    height: 30,
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#743FB3",
    padding: 10,
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  orText: {
    width: 50,
    textAlign: "center",
    color: "#743FB3",
    fontWeight: "bold",
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#743FB3",
  },
  fp: {
    color: "#743FB3",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginBottom: 30,
    paddingRight: 56,
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.topContainer}>
        <BackgroundImage source={bg} resizeMode="cover" style={styles.bg}>
          <Text style={styles.header}>Welcome Back</Text>
        </BackgroundImage>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.form}>
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          ></CustomInput>
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          ></CustomInput>
        </View>
        <Text style={styles.fp}>Forgot password?</Text>
        <View>
          <CustomButtonFill
            text="Log in"
            onPress={() => navigation.navigate("Messages")}
          ></CustomButtonFill>

          <View style={styles.or}>
            <View style={styles.orLine} />
            <View>
              <Text style={styles.orText}>or</Text>
            </View>
            <View style={styles.orLine} />
          </View>

          <CustomButtonTransp
            text="Sign up"
            onPress={() => navigation.navigate("Register")}
          ></CustomButtonTransp>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
