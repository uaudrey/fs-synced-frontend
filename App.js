import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "./src/Components/MessagesScreen";
import ConversationScreen from "./src/Components/ConversationScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [currentConversation, setCurrentConversation] = useState(null);
  const updateCurrentConversation = (id) => {
    setCurrentConversation(id ? parseInt(id) : null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen name="Overview" component={HomeScreen} />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
