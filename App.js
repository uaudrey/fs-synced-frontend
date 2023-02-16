import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./src/Screens/AuthScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import ConversationsScreen from "./src/Screens/ConversationsScreen";
import ConversationScreen from "./src/Screens/ConversationScreen";
import React, { useState, useEffect } from "react";
// import { getFilteredConversations } from "../api/axios";

const Stack = createNativeStackNavigator();
// export const UserContext = React.createContext();

// const Drawer = createDrawerNavigator();
// const DrawerScreen = () => {
//   return (
//     <Drawer.Navigator screenOptions={{drawerPosition: 'left'}}>
//       <Drawer.Screen name="Messages" component={ConversationsScreen}/>
//     </Drawer.Navigator>
//   )
// }

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const [currentConversation, setCurrentConversation] = useState(null);
  const updateCurrentConversation = (id) => {
    setCurrentConversation(id ? parseInt(id) : null);
  };

  const [conversations, setConversations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Tells React that the component needs to do something after render
  // React will remember the function (the "effect") and call it later
  // after performing updates

  // useEffect(() => {
  //   getFilteredConversations()
  //     .then((data) => {
  //       setConversations(data);
  //       return data;
  //     })
  //     .then((data) => {
  //       setSearchResults(data);
  //     });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        // initialRouteName="Messages"
        // screenOptions={{
        //   headerStyle: { backgroundColor: "#4E2979" },
        //   headerTintColor: "#F6EEFF",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        // }}
      >
        {/* <Stack.Screen name="Overview" component={HomeScreen} /> */}
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Messages"
          component={ConversationsScreen}
          updateCurrentConversation={updateCurrentConversation}
        />
        <Stack.Screen
          name="Chat"
          component={ConversationScreen}
          currentConversation={currentConversation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default App;
