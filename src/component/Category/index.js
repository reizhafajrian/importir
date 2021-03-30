import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-svg";
import { ICCamera, ICFeed, ICHome, ICSearch, ICUser } from "../../assets";
const data = [ICUser, ICSearch, ICHome, ICFeed];

export default function Category({ title }) {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.container}>
        <ICCamera />
      </TouchableOpacity>
      <Text style={{marginTop:8,color:"black"}} >{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0.5, height: 0.5 },
    width: 44,
    height: 44,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  page:{
      justifyContent:"center",
      alignItems:"center"
  }
});
