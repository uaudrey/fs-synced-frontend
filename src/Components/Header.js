import React, { useState, useEffect } from "react";
import Search from "./Search";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4E2979",
    // flex: -1,
    flexDirection: "row",
    height: 55,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoSearch: {
    flexDirection: "row",
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: 5,
    marginRight: 4,
    // flex: 1,
  },
  notifIcon: {
    height: 33,
    width: 27,
    marginRight: 8,
  },
});

const Header = (props) => {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);

  const toggleDeleteButtonVisible = () => {
    setDeleteButtonVisible(!deleteButtonVisible);
  };

  const delMsgBtn = props.currentConversation ? (
    <TouchableWithoutFeedback onPress={props.deleteMessage}>
      <Image
        source={require("../../assets/inbox.png")}
        style={styles.deleteBtn}
      />
    </TouchableWithoutFeedback>
  ) : (
    ""
  );

  const deleteButtonElement = deleteButtonVisible ? delMsgBtn : "";

  const notifTrue = "../../assets/notif-filled.png";
  const notifFalse = "../../assets/notif-none-outline.png";
  // const notifIcon = unreadMessages ? notifTrue : notifFalse;

  const notifButtonElement = (
    <Image
      source={require("../../assets/notif-none-outline.png")}
      style={styles.notifIcon}
    ></Image>
    // <Image source={require({notifIcon})} style={styles.icon}></Image>
  );

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoSearch}>
        <Image
          source={require("../../assets/synced-icon.png")}
          style={styles.icon}
        ></Image>
        <Search screenType={props.screenType}></Search>
      </View>
      {notifButtonElement}
      {/* {props.currentConversation ? notifButtonElement : ""} */}
      {/* {props.currentConversation && notifButtonElement} */}
      {deleteButtonElement}
    </View>
  );
};

export default Header;
