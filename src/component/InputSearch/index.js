import React from "react";
import { View,StyleSheet,TextInput } from "react-native";
import {ICSearch} from '../../assets/index'

export default function InputSearch({width,height}) {
    const [text, setText] = React.useState(null);
  return (
    <View style={style.containerSearch(width,height)}>
        <ICSearch/>
        <TextInput style={style.textInput} placeholder="Search" value={text} onChangeText={setText} />
    </View>
  );
}
const style=StyleSheet.create({
    containerSearch:(width,height)=>({
        flexDirection: "row",
        backgroundColor: "white",
        alignItems:'center',
        width:width,
        height:height,
        borderRadius:10,
        paddingLeft:8
      }),
      textInput:{
          width:100
      }
})
