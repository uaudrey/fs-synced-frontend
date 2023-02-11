import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Header from "../Components/Header";
import Message from "../Components/Message";
import ConversationBanner from "../Components/ConversationBanner";

const BACKEND_URL = `${process.env.SYNCED_SERVER_URL}`;

const styles = StyleSheet.create({
  container: {
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

const ConversationScreen = ({ navigation }, props) => {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);

  const toggleDeleteButtonVisible = () => {
    setDeleteButtonVisible(!deleteButtonVisible);
  };

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

  useEffect(getMessages, [props.currentConversation]);

  // To delete message, long press on the message, delete button appears in the header
  const deleteMessage = (id) => {
    axios
      .delete(`${BACKEND_URL}/messages/${id}`)
      .then(() => {
        getMessages();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Could not delete the message.");
      });
  };

  // Map each message to Message
  const messageList = messages.map((message) => {
    return (
      <Message
        key={message.id}
        id={message.id}
        senderName={message.senderName}
        msgText={message.body}
        tiimestamp={message.timestamp}
        status={message.status}
        platform={message.platform}
        longPress={toggleDeleteButtonVisible}
      ></Message>
    );
  });

  return (
    <View style={styles.container}>
      <Header
        screenType="Messages"
        currentConversation={props.currentConversation}
        deleteMessage={deleteMessage}
      ></Header>
      <ConversationBanner
      // senderNames={}
      // platform={}
      ></ConversationBanner>
      {/* {messageList} */}
      {/* <MessageForm sendMessage={sendMessage}></MessageForm> */}
    </View>
  );
};

export default ConversationScreen;
