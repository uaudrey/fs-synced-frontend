import React, { useState, useEffect } from "react";
import { color } from "@rneui/base";
import { SearchBar } from "@rneui/themed";
import { StyleSheet, Image, Text, View } from "react-native";

const Search = (props, { posts, setSearchResults }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    // <View>
    <SearchBar
      placeholder={`Search ${props.screenType}`}
      placeholderTextColor="#FDF6FF"
      // round={true}
      containerStyle={{
        backgroundColor: "none",
        borderBottomWidth: 0,
        borderTopWidth: 0,
        flexDirection: "row",
        paddingTop: 0,
        paddingBottom: 0,
        flexBasis: "auto",
        width: "75%",
      }}
      inputContainerStyle={{
        backgroundColor: "none",
        height: 35,
        // width: "90%",
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#FDF6FF",
        borderRadius: 6,
      }}
      inputStyle={{ color: "#FDF6FF", fontSize: 14 }}
      onChangeText={updateSearch}
      value={search}
    ></SearchBar>
    // </View>
  );
};

export default Search;
