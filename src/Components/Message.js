import { color } from "@rneui/base";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const purpleMain = "#743FB3";
const purpleSecondary = "#FDF6FF";

const styles = StyleSheet.create({
  msg: {
    width: "65%",
    marginRight: 8,
    marginTop: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});

const Message = (props) => {
  const msgType = props.msgType;

  const msgColor = msgType != "incoming" ? purpleMain : "#F6F6F6";
  const textColor = msgType != "incoming" ? purpleSecondary : "black";
  const marginLeft = msgType != "incoming" ? 130 : 8;

  // console.log(alignment);

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.msg,
          marginLeft: marginLeft,
          backgroundColor: msgColor,
          height: props.height,
        }}
        onLongPress={props.longPress}
      >
        <View>
          <Text style={{ color: textColor }}>{props.msgText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Message;
