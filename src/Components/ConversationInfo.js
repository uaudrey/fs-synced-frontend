import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 6,
    borderRadius: 10,
  },

  initialsContainer: {
    backgroundColor: "#7AECAE",
    borderRadius: 6,
    height: 35,
    width: 35,
  },

  initials: {
    // flex: 1,
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 4,
  },

  // name: {
  //   flex: 2,
  // },
  // msg: {
  //   flex: 3,
  // },
  platformLogo: {
    height: 30,
    width: 30,
  },
});

const logoIcons = {
  slack: "../../assets/slack.png",
  whatsapp: "../../assets/whatsapp.png",
};

// List of colors to be randomly selected for initials background
const initialBgColors = [];

const ConversationInfo = (props) => {
  // const conversationID = props.conversationID;
  // const senderName = props.senderName;
  // const msg = props.msgText.slice(0, 40);
  // const platformLogo = logoIcons[props.platform];
  // const senderInitials = senderName
  //   .split(" ")
  //   .map((name) => name.charAt(0).toUpperCase());

  // onPress: screen navigates to that conversation screen; comes from props?
  // const onSelectConversation = (event) => {
  //   props.updateCurrentConversation(event.target.value);
  // };
  // const onSelectConversation = () => {
  //   props.updateCurrentConversation(conversationID);
  // };

  // onLongPress:
  // (1) header changes to show exit/cancel button,
  // delete button, and archive button (optimization)
  // (2) conversation is highlighted: background changes to light purple?
  // const onLongPressEvent = () => {}

  // return (
  //   <TouchableOpacity
  //     onPress={onSelectConversation}
  //     onLongPress={onLongPressEvent}
  //   >
  //     <View>
  //       <Text>{senderInitials}</Text>
  //       <Text>{senderName}</Text>
  //       <Text>{msg}</Text>
  //       <Image
  //        source={require({platformLogo})}
  //       ></Image>
  //     </View>
  //   </TouchableOpacity>
  // );
  return (
    <TouchableOpacity
    // onPress={onSelectConversation}
    // onLongPress={onLongPressEvent}
    >
      <View style={styles.container}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>DL</Text>
        </View>
        <Text style={styles.name}>Darrian Linton</Text>
        <Text style={styles.msg}>Test message to see how it looks</Text>
        <Image
          source={require("../../assets/slack.png")}
          style={styles.platformLogo}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationInfo;
