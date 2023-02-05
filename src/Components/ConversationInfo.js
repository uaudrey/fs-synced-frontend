import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const ConversationInfo = (props) => {
  const conversationID = props.conversationID;
  const senderName = props.senderName;
  const msg = props.msgText.slice(0, 40);
  const senderInitials = senderName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase());

  // onPress: screen navigates to that conversation screen; comes from props?
  // const onSelectConversation = (event) => {
  //   props.updateCurrentConversation(event.target.value);
  // };
  const onSelectConversation = () => {
    props.updateCurrentConversation(conversationID);
  };

  // onLongPress:
  // (1) header changes to show exit/cancel button,
  // delete button, and archive button (optimization)
  // (2) conversation is highlighted: background changes to light purple?
  // const onLongPressEvent = () => {}

  return (
    <TouchableOpacity
      onPress={onSelectConversation}
      onLongPress={onLongPressEvent}
    >
      <View>
        <Text>{senderInitials}</Text>
        <Text>{senderName}</Text>
        <Text>{msg}</Text>
        <Image></Image>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationInfo;
