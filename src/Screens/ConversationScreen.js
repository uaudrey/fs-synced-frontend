import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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

  msgsContainer: {
    // flex: 1,
    // paddingBottom: 50,
    // marginBottom: 50,
  },

  createMsgInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 20,
    width: "90%",
    paddingVertical: 10,
  },

  createMsgText: {
    marginVertical: 15,
  },

  createMsgContainer: {
    marginBottom: 20,
    paddingVertical: 20,
    alignItems: "center",
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
        // `${BACKEND_URL}/conversations/${props.currentConversation}/messages`,
        `${BACKEND_URL}/conversations/messages/${props.currentConversation}`,
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
          // `${BACKEND_URL}/conversations/${props.currentConversation}/messages`
          `${BACKEND_URL}/conversations/messages/${props.currentConversation}`
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
      <ScrollView style={styles.msgsContainer}>
        <Message
          msgText="Functional programming is fun!"
          msgType="incoming"
          height={45}
        ></Message>
        <Message
          msgText="Making up a conversation is hard"
          msgType="outgoing"
          height={45}
        ></Message>
        <Message
          msgText="No need to put the real receipts"
          msgType="outgoing"
          height={45}
        ></Message>
        <Message
          msgText="Just think of stuff I would say. You got this!"
          msgType="incoming"
          height={60}
        ></Message>
        <Message
          msgText="Even in a fake conversation for project, you're still hyping me up"
          msgType="outgoing"
          height={60}
        ></Message>
        <Message
          msgText="But that's easier said than done. You have a very particular personality"
          msgType="outgoing"
          height={80}
        ></Message>
        <Message
          msgText="You're more upbeat than me"
          msgType="outgoing"
          height={45}
        ></Message>
        <Message
          msgText="You better eat this presentation up"
          msgType="incoming"
          height={45}
        ></Message>
        <Message
          msgText="Mmmm nah that sounds more like Brooke"
          msgType="outgoing"
          height={45}
        ></Message>
        <Message
          msgText="Okay well I tried lol"
          msgType="incoming"
          height={45}
        ></Message>
        <Message
          msgText="No but seriously, you're going to do great. You all have worked so hard. Finish this and then you can watch Shrek!"
          msgType="incoming"
          height={100}
        ></Message>
        <Message
          msgText="Wow, that sounds like you. Are you going to be in my head during internship. Like my own Mr. Feeny?"
          msgType="outgoing"
          height={80}
        ></Message>
        <Message
          msgText="Hmmm maybe. I'm pretty much everywhere!"
          msgType="incoming"
          height={60}
        ></Message>
        {/* {messageList} */}
        {/* <MessageForm sendMessage={sendMessage}></MessageForm> */}
      </ScrollView>
      <View style={styles.createMsgContainer}>
        <TextInput
          placeholder="   Message"
          style={styles.createMsgInput}
        ></TextInput>
      </View>
    </View>
  );
};

export default ConversationScreen;
