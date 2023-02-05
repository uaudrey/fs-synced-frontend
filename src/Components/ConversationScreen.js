import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Message from "./Message";

const BACKEND_URL = `${process.env.SYNCED_SERVER_URL}`;

const ConversationScreen = () => {
  const [messages, setMessages] = useState([]);
  const sendMessage = (message) => {
    axios
      .post(
        `${BACKEND_URL}/conversations/${props.currentConversation}/messages`,
        { message }
      )
      .then(() => {
        getMessages();
      })
      .catch((err) => console.log("Error:", err));
  };

  const getMessages = () => {
    if (props.currentConversation)
      axios
        .get(
          `${BACKEND_URL}/conversations/${props.currentConversation}/messages`
        )
        .then((result) => {
          setMessages(result.data);
        })
        .catch((err) => console.log("Error:", err));
    // else setMessages([]);
  };

  // Map each message to Message
  const messageList = messages.map((conversation) => {
    return (
      <Message
        key={message.id}
        id={message.id}
        senderName={message.senderName}
        msgText={message.body}
        tiimestamp={message.timestamp}
        // Message or conversation status?
        status={message.status}
        platform={message.platform}
      ></Message>
    );
  });

  return (
    <View>
      <ConversationHeader></ConversationHeader>
      <ConversationBanner></ConversationBanner>
      {messageList}
      <MessageForm></MessageForm>
    </View>
  );
};

export default ConversationScreen;
