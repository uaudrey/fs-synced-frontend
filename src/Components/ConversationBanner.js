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
    height: 70,
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
  },

  platformIcon: {
    backgroundColor: "#743FB3",
    height: 35,
    width: 35,
    borderRadius: 7,
  },

  platformLogo: {
    height: 27,
    width: 27,
  },
});

const logoIcons = {
  slack: "../../assets/slack.png",
  whatsapp: "../../assets/whatsapp.png",
};

const ConversationBanner = () => {
  // const senderName =
  // platform

  return (
    <View style={styles.container}>
      <View>
        <Text>Darrian Linton</Text>
        <Text>Conversation Type</Text>
      </View>
      <View style={styles.platformIcon}>
        <Image
          source={require("../../assets/slack.png")}
          style={styles.platformLogo}
        />
      </View>
    </View>
  );
};

export default ConversationBanner;
