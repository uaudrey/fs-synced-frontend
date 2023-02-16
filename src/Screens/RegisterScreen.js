import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Components/CustomInput";
import CustomButtonFill from "../Components/CustomButtonFill";
import CustomButtonTransp from "../Components/CustomButtonTransp";
import bg from "../../assets/purple-icon5.jpg";

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
    // fontFamily: "Helvetica Neue",
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
    marginBottom: 40,
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
});

const RegisterScreen = ({ navigation }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  // const { name, email, password, password2 } = formData;

  return (
    <View style={styles.screen}>
      <View style={styles.topContainer}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
          <Text style={styles.header}>Create An Account</Text>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <View style={styles.form}>
          <CustomInput
            placeholder="Name"
            value={name}
            setValue={setName}
          ></CustomInput>
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
          <CustomInput
            placeholder="Confirm Password"
            value={password2}
            setValue={setPassword2}
            secureTextEntry={true}
          ></CustomInput>
          {/* <TextInput style={styles.input} placeholder="Name" /> */}
          {/* <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" /> */}
        </View>
        {/* </form> */}
        <View>
          <CustomButtonFill
            text="Sign up"
            onPress={() => navigation.navigate("Messages")}
          ></CustomButtonFill>
          {/* <Text style={{ color: "gray" }}>
            By registering you confirm that you accept our{" "}
            <Text style={{ color: "orange" }}>Terms of Use</Text> and{" "}
            <Text style={{ color: "orange" }}>Privacy Policy</Text>.
          </Text> */}

          <View style={styles.or}>
            <View style={styles.orLine} />
            <View>
              <Text style={styles.orText}>or</Text>
            </View>
            <View style={styles.orLine} />
          </View>

          <CustomButtonTransp
            text="Log in"
            onPress={() => navigation.navigate("Login")}
          ></CustomButtonTransp>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
