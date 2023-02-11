import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Message = (props) => {
  return (
    <TouchableOpacity onLongPress={props.longPress}>
      <View>
        <Text>{props.msgText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Message;
