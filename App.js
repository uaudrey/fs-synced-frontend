import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConversationsScreen from "./src/Screens/ConversationsScreen";
import ConversationScreen from "./src/Screens/ConversationScreen";
import React, { useState, useEffect } from "react";
// import { getFilteredConversations } from "../api/axios";

const Stack = createNativeStackNavigator();

const App = () => {
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
      <Stack.Navigator initialRouteName="Messages">
        {/* <Stack.Screen name="Overview" component={HomeScreen} /> */}
        <Stack.Screen
          name="Messages"
          component={ConversationsScreen}
          updateCurrentConversation={updateCurrentConversation}
        />
        <Stack.Screen
          name="Conversation"
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
