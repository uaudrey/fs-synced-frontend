import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Message = (props) => {
  return <Text>{props.msgText}</Text>;
};

export default Message;
