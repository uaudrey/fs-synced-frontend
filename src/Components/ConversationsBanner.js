import { Button } from "@rneui/base";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6EEFF",
    height: 120,
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  platformButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },

  platformLogo: {
    height: 27,
    width: 27,
  },

  addPlatform: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#743FB3",
    borderRadius: 6,
    height: 35,
    width: 35,
    // justifyContent: "center",
    alignItems: "center",
  },

  addPlatformText: {
    // textAlign: "center",
    fontSize: 34,
    color: "#743FB3",
    // padding: 20,
    // paddingBottom: 10,
    lineHeight: 34,
  },

  platformIcons: {
    backgroundColor: "#743FB3",
    height: 35,
    width: 35,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  filterMessagesLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#743FB3",
    marginBottom: 5,
  },

  filterLabel: {
    fontWeight: "bold",
  },

  p: {
    color: "#743FB3",
    fontSize: 13,
  },

  platformCountP: {
    textAlign: "right",
    fontWeight: "normal",
  },

  filterButtonsContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  filterButton: {
    borderWidth: 1,
    borderColor: "#743FB3",
    borderRadius: 5,
    height: 22,
    width: 86,
    paddingTop: 2,
    // paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  filterButtonText: {
    textAlign: "center",
    fontSize: 12,
    color: "#743FB3",
  },

  filterButtonSelected: {
    backgroundColor: "#743FB3",
  },

  filterButtonSelectedText: {
    color: "#F6EEFF",
  },

  filterButtonNotSelected: {
    backgroundColor: "transparent",
  },

  filterButtonNotSelectedText: {
    color: "#743FB3",
  },
});

const platformData = {
  slack: "../../assets/slack.png",
};

const ConversationsBanner = (props) => {
  // const platformsSet = new Set();
  // As a conversation is added, add its platform to the set
  // OR
  //useEffect?
  const [platformList, setPlatformList] = useState([]);
  // const platforms = props.platforms;

  const getPlatformList = () => {
    const platforms = props.platforms;
    setPlatformList(platforms);
  };

  useEffect(getPlatformList);

  // platformSelectButtons = platformList.map((platform) => {
  //   return (
  //     <TouchableOpacity style={styles.platformIcons}>
  //       <Image source={require({platformData.platform})} />
  //     </TouchableOpacity>
  //   );
  // });
  // let platformSelectButtons = [];
  // platformList.forEach((platform) => {
  //   // const imgUrl = platformData.platform;
  //   const imgUrl = platformData[platform];
  //   platformSelectButtons.push(
  //     <TouchableOpacity style={styles.platformIcons}>
  //       <Image source={require({ imgUrl })} />
  //     </TouchableOpacity>
  //   );
  // });

  const [isPressed, setIsPressed] = useState(true);
  const onButtonPress = () => {
    setIsPressed(!isPressed);
    // Sort
  };

  const filterButtonStyle = isPressed
    ? styles.filterButtonSelected
    : styles.filterButtonNotSelected;

  const filterButtonTextStyle = isPressed
    ? styles.filterButtonSelectedText
    : styles.filterButtonNotSelectedText;

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.platformButtonsContainer}>
          <TouchableOpacity style={styles.platformIcons} activeOpacity={0.5}>
            <Image
              source={require("../../assets/inbox.png")}
              style={styles.platformLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.platformIcons} activeOpacity={0.5}>
            <Image
              source={require("../../assets/whatsapp.png")}
              style={styles.platformLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.platformIcons} activeOpacity={0.5}>
            <Image
              source={require("../../assets/slack.png")}
              style={styles.platformLogo}
            />
          </TouchableOpacity>
          {/* {platformSelectButtons} */}
        </View>
        <TouchableHighlight style={styles.addPlatform}>
          {/* <View style={{...styles.button, isPressed ? styles.buttonSelected : styles.buttonNotSelected}}> */}
          {/* <View > */}
          <Text style={styles.addPlatformText}>+</Text>
          {/* </View> */}
        </TouchableHighlight>
      </View>
      <Text style={{ ...styles.p, ...styles.platformCountP }}>2 Platforms</Text>
      <View style={styles.filterMessagesLabels}>
        <Text style={{ ...styles.p, ...styles.filterLabel }}>FILTER</Text>
        <Text style={styles.p}>9 Chats</Text>
        {/* <Text>{`${props.messageCount} Messages`}</Text> */}
      </View>
      <View style={styles.filterButtonsContainer}>
        <TouchableWithoutFeedback onPress={onButtonPress}>
          <View style={{ ...styles.filterButton, ...filterButtonStyle }}>
            <Text
              style={{ ...styles.filterButtonText, ...filterButtonTextStyle }}
              // style={styles.filterButtonText}
            >
              All
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback /*onPress={onButtonPress}*/>
          {/* <View style={{ ...styles.filterButton, ...filterButtonStyle }}> */}
          <View style={styles.filterButton}>
            <Text
              // style={{ ...styles.filterButtonText, ...filterButtonTextStyle }}
              style={styles.filterButtonText}
            >
              Unread
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback /*onPress={onButtonPress}*/>
          <View style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Important</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ConversationsBanner;
