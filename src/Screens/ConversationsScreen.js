import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import Header from "../Components/Header";
import ConversationsBanner from "../Components/ConversationsBanner";
import ConversationInfo from "../Components/ConversationInfo";
import slackLogo from "../../assets/slack.png";
import waLogo from "../../assets/whatsapp.png";

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
    fontWeight: "bold",
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
          // onPress={() =>
          //       navigation.navigate('Conversation', {conversationId: {currentConversation}})
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

  return (
    <View style={styles.container}>
      <Header screenType="Conversations"></Header>
      <ConversationsBanner
        messageCount={conversations.length}
        platforms={platforms}
      ></ConversationsBanner>
      <Text style={styles.inboxP}>INBOX</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ConversationInfo
          initalsColor="#7ABCEC"
          initials="AM"
          sender="Ashanti M"
          image={slackLogo}
          msg="Hey! Just wanted to check in"
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#7AECAE"
          initials="AG"
          sender="Aviva Gars"
          image={slackLogo}
          msg="I love CSS! I've seen the light. ..."
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#E7D110"
          initials="CT"
          sender="Chris Tal"
          image={waLogo}
          msg="What happened to the ramen I..."
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#FD8AE4"
          initials="A"
          sender="Aisha"
          image={slackLogo}
          msg="Discord won't know what hit t..."
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#CA8AFD"
          initials="M"
          sender="Madre"
          image={waLogo}
          msg="I'm looking at purses. Which o..."
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#E7D110"
          initials="DL"
          sender="Darrian Linton"
          image={waLogo}
          msg="Want to go work out?"
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#FD8AE4"
          initials="AA"
          sender="Audrey Andoy"
          image={slackLogo}
          msg="Hmmm maybe. I'm pretty muc..."
          onSelectConversation={() => navigation.navigate("Chat")}
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#7AECAE"
          initials="BH"
          sender="Brooke Hill"
          image={slackLogo}
          msg="Congratulations bb"
        ></ConversationInfo>
        <ConversationInfo
          initalsColor="#7ABCEC"
          initials="M"
          sender="Mundungus"
          image={waLogo}
          msg="Want anything from that pho..."
        ></ConversationInfo>
        {/* {conversationsList} */}
      </ScrollView>
    </View>
  );
};

export default ConversationsScreen;
