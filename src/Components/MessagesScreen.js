import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import ConversationInfo from "./ConversationInfo";

const BACKEND_URL = `${process.env.SYNCED_SERVER_URL}`;

const MessagesScreen = ({ navigation }) => {
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
  const conversationsList = conversations.map((conversation) => {
    return (
      <View>
        <ConversationsHeader></ConversationsHeader>
        <ConversationsBanner></ConversationsBanner>
        <ConversationInfo
          key={conversation.id}
          conversationID={conversation.id}
          senderName={conversation.senderName}
          msgText={conversation.body}
          platform={conversation.platform}
          // onPressEvent={() => navigation.navigate('Conversation')}
          updateCurrentConversation={props.updateCurrentConversation}
        ></ConversationInfo>
      </View>
    );
  });

  // onPress={() =>
  //       navigation.navigate('Profile', {name: 'Jane'})

  return (
    <View>
      <MessagesHeader></MessagesHeader>
      <MessagesBanner></MessagesBanner>
      {conversationsList}
    </View>
  );
};

export default MessagesScreen;
