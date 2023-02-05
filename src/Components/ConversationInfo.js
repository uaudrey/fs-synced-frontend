import { StyleSheet, Text, View, Image } from "react-native";

// senderName={conversation.senderName}
// msgText={conversation.body}
// platform={conversation.platform}

const ConversationInfo = (props) => {
  const senderName = props.senderName;
  const msg = props.msgText.slice(0, 40);
  const senderInitials = senderName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase());

//  <TouchableHighlight
//    onPress={this._onPressButton}
//    onLongPress={this._onLongPressButton}
//    underlayColor="white"
//  >
//    <View style={styles.button}>
//      <Text style={styles.buttonText}>Touchable with Long Press</Text>
//    </View>
//  </TouchableHighlight>;

  return (
    <TouchableHighlight
   onPress={this._onPressButton}
   onLongPress={this._onLongPressButton}
  >
    <View>
      <Text>{senderInitials}</Text>
      <Text>{senderName}</Text>
      <Text>{msg}</Text>
      <Image></Image>
    </View>
    </TouchableHighlight>;
  );
};

export default ConversationInfo;
