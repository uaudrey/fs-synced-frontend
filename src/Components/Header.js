import React, { useState, useEffect } from "react";
import Search from "./Search";
import { StyleSheet, Image, Text, View } from "react-native";

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
  const notifTrue = "../../assets/notif-filled.png";
  const notifFalse = "../../assets/notif-none-outline.png";
  // const notifIcon = unreadMessages ? notifTrue : notifFalse;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoSearch}>
        <Image
          source={require("../../assets/synced-icon.png")}
          style={styles.icon}
        ></Image>
        <Search screenType={props.screenType} style={styles.search}></Search>
      </View>
      <Image
        source={require("../../assets/notif-none-outline.png")}
        style={styles.notifIcon}
      ></Image>
      {/* <Image source={require({notifIcon})} style={styles.icon}></Image> */}
    </View>
  );
};

export default Header;
