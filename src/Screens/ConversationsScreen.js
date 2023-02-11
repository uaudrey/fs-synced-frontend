import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Header from "../Components/Header";
import ConversationsBanner from "../Components/ConversationsBanner";
import ConversationInfo from "../Components/ConversationInfo";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    height: "100%",
    backgroundColor: "#FFF",
  },

  inboxP: {
    color: "#743FB3",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  },
});

const BACKEND_URL = `${process.env.SYNCED_SERVER_URL}`;

const ConversationsScreen = ({ navigation }) => {
  // GET conversations
  const [conversations, setConversations] = useState([]);

  const getConversations = () => {
    axios
      .get(`${BACKEND_URL}/conversations`)
      .then((result) => {
        setConversations(result.data);
      })
      .catch((err) => console.log("Error:", err));
  };

  // Map each conversation to ConversationInfo
  const [conversationsList] = conversations.map((conversation) => {
    return (
      <View>
        <ConversationInfo
          key={conversation.id}
          conversationID={conversation.id}
          senderName={conversation.senderName}
          msgText={conversation.body}
          platform={conversation.platform}
          // onPressEvent={() => navigation.navigate('Chat')}
          updateCurrentConversation={props.updateCurrentConversation}
          notifButton={notifButton}
        ></ConversationInfo>
      </View>
    );
  });

  // Map each conversation to ConversationInfo
  // Count of the user's different platforms
  let platforms = new Set();
  let convList = [];
  conversations.forEach((conversation) => {
    convList.push(
      <View>
        <ConversationInfo
          key={conversation.id}
          conversationID={conversation.id}
          senderName={conversation.senderName}
          msgText={conversation.body}
          platform={conversation.platform}
          // onPressEvent={() => navigation.navigate('Chat')}
          updateCurrentConversation={props.updateCurrentConversation}
          notifButton={notifButton}
        ></ConversationInfo>
      </View>
    );
    platforms.add(conversation.platform);
  });

  const deleteConversation = (id) => {
    axios.delete(`${BACKEND_URL}/conversations${id}`).then((response) => {
      getConversations();
    });
  };

  // const platformsSet = new Set();
  // As a conversation is added, add its platform to the set
  // OR
  //useState and useEffect?
  // const [conversationPlatforms, setConversationPlatforms] = useState([]);

  // onPress={() =>
  //       navigation.navigate('Profile', {name: 'Jane'})

  return (
    <View style={styles.container}>
      <Header screenType="Conversations"></Header>
      <ConversationsBanner
        messageCount={conversations.length}
        platforms={platforms}
      ></ConversationsBanner>
      <Text style={styles.inboxP}>INBOX</Text>
      <ConversationInfo></ConversationInfo>
      <ConversationInfo></ConversationInfo>
      <ConversationInfo></ConversationInfo>
      {/* {conversationsList} */}
    </View>
  );
};

export default ConversationsScreen;
